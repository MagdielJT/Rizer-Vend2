/*******************************************************************
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * Name: MPZ_Stock_Optimo.js
 *
 * Author: Efficientix Dev Team
 * Purpose: The base Suitelet for POS
 * Script: customscript_efx_pos_vue_index_sl
 * Deploy: customdeploy_efx_pos_vue_index_sl
 * ******************************************************************* */

define(['N/runtime', 'N/log', 'N/search', 'N/config', 'N/url', 'N/ui/serverWidget', 'N/https', 'N/file'],
  
  function (runtime, log, search, config, urlMod, ui, https, file) {
    
    function main (context) {
      var section = '';
      var userObj = runtime.getCurrentUser();
      log.audit({ title: 'User', details: JSON.stringify(userObj) });
      
      var mode = context.request.parameters.custparam_mode || '';
      var script_id = context.request.parameters.custparam_script;
      var deployment_id = context.request.parameters.custparam_deploy;
      
      var this_script_id = 'customscript_efx_pos_vue_index_sl';
      var this_deploy_id = 'customdeploy_efx_pos_vue_index_sl';
      
      if (mode === 'resolveurl') {
        var responseResult = {
          statusCode: '',
          message: '',
          id: '',
          name: '',
          results: {}
        };
        if (script_id && deployment_id) {
          var url = resolve_url(script_id, deployment_id);
          
          responseResult.results = url;
          responseResult.statusCode = '2';
          responseResult.message = 'URL Obtenida';
        } else {
          responseResult.message = 'No se ha provisto id de script o deployment a resolver';
        }
        
        context.response.write(JSON.stringify(responseResult));
      } else {
        // get_display_data();
        
        section = 'Get Display Data';
        {
          try {
            
            section = 'GET THIS URL';
            {
              var this_url = resolve_url(this_script_id, this_deploy_id);
              var url_resolver = this_url + '&custparam_mode=resolveurl';
            }
            //
            // section = 'GET BACKEND URL';
            // {
            //   var endpoint_url = resolve_url(backend_script_id, backend_deploy_id);
            // }
            
            section = 'GET logo'
            {
              var logo_id = 'custscript_efx_pos_vue_imagen_default';
              var logoOptions = runtime.getCurrentScript().getParameter({ name: logo_id })
              var logo = GetFileData({name: logoOptions})
              
            }
            section = 'Create UI';
            {
              var form = ui.createForm({
                title: ' ',
                hideNavBar: true
              });
              
              
              var html = form.addField({
                id: 'custpage_html',
                type: ui.FieldType.INLINEHTML,
                label: 'HTML Content'
              });
              
              html.defaultValue = get_template(url_resolver, logo['url']);
              
              context.response.writePage(form);
              
            }
            //end section create ui
            
          } catch (e) {
            throw e;
          }
        }
      }
    }
    
    function get_template(url_resolver, logo) {
      var html='';
      var CssFile = GetFileData({name: 'efx_pos_vue_main.css'});
      var JsChunksFile = GetFileData({name: 'efx_pos_vue_chunk_vendors.js'});
      var VueApp = GetFileData({name: 'efx_pos_vue_app.js'});
      html += '<!DOCTYPE html>';
      html += '<html>';
      html += '<head>';
      html += '  <meta charset="utf-8">';
      html += '  <meta http-equiv="X-UA-Compatible" content="IE=edge">';
      html += '  <meta name="viewport" content="width=device-width,initial-scale=1.0">';
      html += '  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">';
      
      // html += '  <link rel="stylesheet" href="https://system.netsuite.com/core/media/media.nl?id=3491&c=TSTDRV905028&h=274aec0124d391df26b8&_xt=.css">';
      html += '  <link rel="stylesheet" href="'+ CssFile['url'] +'">';
      
      html += '  <title>pos</title>';
      html += '</head>';
      html += '<body>';
      html += '<noscript>';
      html += '  <strong>We are sorry but pos doesnt work properly without JavaScript enabled. Please enable it to continue.</strong>';
      html += '</noscript>';
      html += '<div id="app"></div>';
      html += '<div class="container d-none">';
      html += '  <div class="row">';
      html += '    <textarea class="col-sm-12" id="response-result-url" name="" rows="" cols="" readonly>'+ url_resolver +'</textarea>';
      html += '    <textarea class="col-sm-12" id="company-logo" name="" rows="" cols="" readonly>'+ logo +'</textarea>';
      html += '  </div>';
      html += '</div>';
      // html += '<script src="https://system.netsuite.com/core/media/media.nl?id=3493&c=TSTDRV905028&h=532e60bb727d9f43a5ed&_xt=.js"></script>';
      // html += '<script src="https://system.netsuite.com/core/media/media.nl?id=3492&c=TSTDRV905028&h=cc200fb98bf44edaf298&_xt=.js"></script>';
      
      html += '<script src="'+ JsChunksFile['url'] +'"></script>';
      html += '<script src="'+ VueApp['url'] +'"></script>';
      html += '</body>';
      html += '</html>';
      return html;
    }
    
    function resolve_url(script, deploy) {
      var resolved_url = urlMod.resolveScript({
        scriptId: script,
        deploymentId: deploy,
        returnExternalUrl: false
      });
      log.audit({title: 'URL resuelta', details: resolved_url});
      return resolved_url;
    }
    
    
    /**
     * Return the URL of an asset
     * @param       {Object} options [description]
     * @constructor
     */
    function GetFileData(options) {
      var fileData = {
        url: ''
      };
      try {
      var fileName = options['name'];
      var files = [];
      var itemSearchObj = search.create({
        type: 'file',
        filters: [
          ['name', search.Operator.IS, fileName]
        ],
        columns: [
          { name: 'name'}
        ]
      });
      
      var searchResultCount = itemSearchObj.runPaged().count;
      log.debug("itemSearchObj result count", searchResultCount);
      
      itemSearchObj.run().each(function(result){
        // .run().each has a limit of 4,000 results
        log.audit({ title: 'result file',details: JSON.stringify(result) });
        var id = parseInt(result.id);
        // var name = result.getValue({name: 'name'});
        files.push({
          id: id
        });
      });
      
      var fileObj = file.load({ id: files[0].id});
      var fileURL = fileObj.url;
      	fileData.url = fileURL
        log.audit({title:'File ',details: JSON.stringify(fileData)});
      } catch (e) {
        log.error({
          title: 'File Not Found',
          details: e
        });
      } finally {
        return fileData;
      }
      
      
    }
    
    return {
      onRequest: main
    };
  });