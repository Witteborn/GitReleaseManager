// -----------------------------------------------------------------------
// <copyright file="CreateCommand.cs" company="GitTools Contributors">
// Copyright (c) 2015 - Present - GitTools Contributors
// </copyright>
// -----------------------------------------------------------------------

namespace GitReleaseManager.Core.Commands
{
    using System.Threading.Tasks;
    using GitReleaseManager.Core.Model;
    using GitReleaseManager.Core.Options;
    using Serilog;

    public class CreateCommand : ICommand<CreateSubOptions>
    {
        private readonly IVcsService _vcsService;
        private readonly ILogger _logger;

        public CreateCommand(IVcsService vcsService, ILogger logger)
        {
            _vcsService = vcsService;
            _logger = logger;
        }

        public async Task<int> Execute(CreateSubOptions options)
        {
            _logger.Information("Creating release...");

            Release release;

            if (!string.IsNullOrEmpty(options.Milestone))
            {
                _logger.Verbose("Milestone {Milestone} was specified", options.Milestone);
                var releaseName = options.Name;

                if (string.IsNullOrWhiteSpace(releaseName))
                {
                    _logger.Verbose("No Release Name was specified, using {Milestone}.", options.Milestone);
                    releaseName = options.Milestone;
                }

                release = await _vcsService.CreateReleaseFromMilestoneAsync(options.RepositoryOwner, options.RepositoryName, options.Milestone, releaseName, options.TargetCommitish, options.AssetPaths, options.Prerelease, options.Template).ConfigureAwait(false);
            }
            else
            {
                _logger.Verbose("No milestone was specified, switching to release creating from input file");
                release = await _vcsService.CreateReleaseFromInputFileAsync(options.RepositoryOwner, options.RepositoryName, options.Name, options.InputFilePath, options.TargetCommitish, options.AssetPaths, options.Prerelease).ConfigureAwait(false);
            }

            _logger.Information("Drafted release is available at:\n{HtmlUrl}", release.HtmlUrl);
            _logger.Verbose("Body:\n{Body}", release.Body);

            return 0;
        }
    }
}