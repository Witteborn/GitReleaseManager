
var camelCaseTokenizer = function (builder) {

  var pipelineFunction = function (token) {
    var previous = '';
    // split camelCaseString to on each word and combined words
    // e.g. camelCaseTokenizer -> ['camel', 'case', 'camelcase', 'tokenizer', 'camelcasetokenizer']
    var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
      var current = cur.toLowerCase();
      if (acc.length === 0) {
        previous = current;
        return acc.concat(current);
      }
      previous = previous.concat(current);
      return acc.concat([current, previous]);
    }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }

  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"CreateConfig",
            content:"CreateConfig",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/CreateConfig',
            title:"CreateConfig",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"IGitHubClient",
            content:"IGitHubClient",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/IGitHubClient',
            title:"IGitHubClient",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"BaseGitHubSubOptions",
            content:"BaseGitHubSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/BaseGitHubSubOptions',
            title:"BaseGitHubSubOptions",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"BaseSubOptions",
            content:"BaseSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/BaseSubOptions',
            title:"BaseSubOptions",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"IFileSystem",
            content:"IFileSystem",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Helpers/IFileSystem',
            title:"IFileSystem",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"AddAssetSubOptions",
            content:"AddAssetSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/AddAssetSubOptions',
            title:"AddAssetSubOptions",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"MainOptions",
            content:"MainOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/MainOptions',
            title:"MainOptions",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"Logger",
            content:"Logger",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/Logger',
            title:"Logger",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"ReleaseNotesExporter",
            content:"ReleaseNotesExporter",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/ReleaseNotesExporter',
            title:"ReleaseNotesExporter",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"ShowConfigSubOptions",
            content:"ShowConfigSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/ShowConfigSubOptions',
            title:"ShowConfigSubOptions",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"LabelSubOptions",
            content:"LabelSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/LabelSubOptions',
            title:"LabelSubOptions",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"FileSystem",
            content:"FileSystem",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Helpers/FileSystem',
            title:"FileSystem",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"CloseSubOptions",
            content:"CloseSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/CloseSubOptions',
            title:"CloseSubOptions",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"LabelAlias",
            content:"LabelAlias",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/LabelAlias',
            title:"LabelAlias",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"MilestoneExtensions",
            content:"MilestoneExtensions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/MilestoneExtensions',
            title:"MilestoneExtensions",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"ConfigurationProvider",
            content:"ConfigurationProvider",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/ConfigurationProvider',
            title:"ConfigurationProvider",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"InitSubOptions",
            content:"InitSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/InitSubOptions',
            title:"InitSubOptions",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"PublishSubOptions",
            content:"PublishSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/PublishSubOptions',
            title:"PublishSubOptions",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"ExportConfig",
            content:"ExportConfig",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/ExportConfig',
            title:"ExportConfig",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"ExportSubOptions",
            content:"ExportSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/ExportSubOptions',
            title:"ExportSubOptions",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"Program",
            content:"Program",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli/Program',
            title:"Program",
            description:""
        }
    );
    a(
        {
            id:21,
            title:"ReleaseNotesBuilder",
            content:"ReleaseNotesBuilder",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/ReleaseNotesBuilder',
            title:"ReleaseNotesBuilder",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"ConfigSerializer",
            content:"ConfigSerializer",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/ConfigSerializer',
            title:"ConfigSerializer",
            description:""
        }
    );
    a(
        {
            id:23,
            title:"OctokitExtensions",
            content:"OctokitExtensions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/OctokitExtensions',
            title:"OctokitExtensions",
            description:""
        }
    );
    a(
        {
            id:24,
            title:"CreateSubOptions",
            content:"CreateSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/CreateSubOptions',
            title:"CreateSubOptions",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"DefaultGitHubClient",
            content:"DefaultGitHubClient",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/DefaultGitHubClient',
            title:"DefaultGitHubClient",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"Config",
            content:"Config",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/Config',
            title:"Config",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
