
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
            title:"MissingReleaseException",
            content:"MissingReleaseException",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Exceptions/MissingReleaseException',
            title:"MissingReleaseException",
            description:""
        }
    );
    a(
        {
            id:1,
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
            id:2,
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
            id:3,
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
            id:4,
            title:"LogConfiguration",
            content:"LogConfiguration",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Logging/LogConfiguration',
            title:"LogConfiguration",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"Milestone",
            content:"Milestone",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/Milestone',
            title:"Milestone",
            description:""
        }
    );
    a(
        {
            id:6,
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
            id:7,
            title:"SampleAttribute",
            content:"SampleAttribute",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Attributes/SampleAttribute',
            title:"SampleAttribute",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"OpenSubOptions",
            content:"OpenSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/OpenSubOptions',
            title:"OpenSubOptions",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"LabelConfig",
            content:"LabelConfig",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/LabelConfig',
            title:"LabelConfig",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"Issue",
            content:"Issue",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/Issue',
            title:"Issue",
            description:""
        }
    );
    a(
        {
            id:11,
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
            id:12,
            title:"Release",
            content:"Release",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/Release',
            title:"Release",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"BaseVcsOptions",
            content:"BaseVcsOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/BaseVcsOptions',
            title:"BaseVcsOptions",
            description:""
        }
    );
    a(
        {
            id:14,
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
            id:15,
            title:"CommentGatheringTypeInspector",
            content:"CommentGatheringTypeInspector",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration.CommentSerialization/CommentGatheringTypeInspector',
            title:"CommentGatheringTypeInspector",
            description:""
        }
    );
    a(
        {
            id:16,
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
            id:17,
            title:"AutoMapperConfiguration",
            content:"AutoMapperConfiguration",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/AutoMapperConfiguration',
            title:"AutoMapperConfiguration",
            description:""
        }
    );
    a(
        {
            id:18,
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
            id:19,
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
            id:20,
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
            id:21,
            title:"GitHubProfile",
            content:"GitHubProfile",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.MappingProfiles/GitHubProfile',
            title:"GitHubProfile",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"GitHubProvider",
            content:"GitHubProvider",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/GitHubProvider',
            title:"GitHubProvider",
            description:""
        }
    );
    a(
        {
            id:23,
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
            id:24,
            title:"CommentsObjectDescriptor",
            content:"CommentsObjectDescriptor",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration.CommentSerialization/CommentsObjectDescriptor',
            title:"CommentsObjectDescriptor",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"DiscardSubOptions",
            content:"DiscardSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Options/DiscardSubOptions',
            title:"DiscardSubOptions",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"CloseConfig",
            content:"CloseConfig",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/CloseConfig',
            title:"CloseConfig",
            description:""
        }
    );
    a(
        {
            id:27,
            title:"IVcsProvider",
            content:"IVcsProvider",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/IVcsProvider',
            title:"IVcsProvider",
            description:""
        }
    );
    a(
        {
            id:28,
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
            id:29,
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
            id:30,
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
            id:31,
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
            id:32,
            title:"Label",
            content:"Label",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/Label',
            title:"Label",
            description:""
        }
    );
    a(
        {
            id:33,
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
            id:34,
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
            id:35,
            title:"ClientBuilder",
            content:"ClientBuilder",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/ClientBuilder',
            title:"ClientBuilder",
            description:""
        }
    );
    a(
        {
            id:36,
            title:"ClipBoardHelper",
            content:"ClipBoardHelper",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/ClipBoardHelper',
            title:"ClipBoardHelper",
            description:""
        }
    );
    a(
        {
            id:37,
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
            id:38,
            title:"ReleaseNotesBuilderIntegrationTests",
            content:"ReleaseNotesBuilderIntegrationTests",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/ReleaseNotesBuilderIntegrationTests',
            title:"ReleaseNotesBuilderIntegrationTests",
            description:""
        }
    );
    a(
        {
            id:39,
            title:"InvalidStateException",
            content:"InvalidStateException",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Exceptions/InvalidStateException',
            title:"InvalidStateException",
            description:""
        }
    );
    a(
        {
            id:40,
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
            id:41,
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
            id:42,
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
            id:43,
            title:"Helper",
            content:"Helper",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/Helper',
            title:"Helper",
            description:""
        }
    );
    a(
        {
            id:44,
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
            id:45,
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
    a(
        {
            id:46,
            title:"CommentsObjectGraphVisitor",
            content:"CommentsObjectGraphVisitor",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration.CommentSerialization/CommentsObjectGraphVisitor',
            title:"CommentsObjectGraphVisitor",
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
