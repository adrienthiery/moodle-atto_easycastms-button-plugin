YUI.add("moodle-atto_easycastms-button",function(d,t){var o="atto_easycastms";d.namespace("M.atto_easycastms").Button=d.Base.create("button",d.M.editor_atto.EditorPlugin,[],{initializer:function(){this.addButton({icon:"icon",iconComponent:o,title:"title",callback:this.openChoicesDialogue})},_currentSelection:null,_form:null,openChoicesDialogue:function(){this._showDialogue()},_showDialogue:function(){(this._currentSelection=this.get("host").getSelection(),!1!==this._currentSelection)&&this.getDialogue({headerContent:M.util.get_string("pluginname",o),width:"98%",focusAfterHide:!0}).set("bodyContent",this._getDialogueContent()).show()},_getDialogueContent:function(){var t=d.Node.create('<div style="word-wrap: break-word;"></div>'),e=M.util.get_string("inputlabel",o),i=M.util.get_string("inputplaceholder",o),s=M.util.get_string("inputsubmit",o);return this._form=d.Node.create('<form class="atto_form"><label for="mediaId">'+e+'</label><input type="text" name="mediaId" id="mediaId" placeholder="'+i+'"/><input type="submit" class="submit" value="'+s+'" /></form>'),this._form.one(".submit").on("click",this._setVideo,this),t.append(this._form),t},_setVideo:function(t){var e,i,s,o,a,n,r,l,c,u;if(t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),""!==(e=this._form.one("#mediaId").get("value"))){for(e=e.trim(),i=this.get("host"),this.editor.focus(),i.setSelection(this._currentSelection),s=window.location.search.split("?")[1].split("&"),o=-1,a=0;a<s.length;a++)r=(n=s[a]).split("=")[0],l=n.split("=")[1],"update"===r&&(o=l);c='<iframe id="mediaserver_iframe" style="width: 100%; height: 800px;" src="/mod/easycastms/launch.php?id={{ courseId }}&mediaId={{ mediaId }}" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script type="text/javascript" src="/mod/easycastms/statics/javascripts/jquery.min.js?_=1"><\/script><script type="text/javascript" src="/mod/easycastms/statics/javascripts/iframe_manager.js?_=1"><\/script>',u=d.Handlebars.compile(c)({courseId:o,mediaId:e}),i.insertContentAtFocusPoint(u),this.markUpdated()}}})},"@VERSION@",{requires:["promise","moodle-editor_atto-plugin","event-valuechange"]});