Ext.data.JsonP.SampleApp_controller_mms_Coupon({"tagname":"class","name":"SampleApp.controller.mms.Coupon","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Coupon.js","href":"Coupon2.html#SampleApp-controller-mms-Coupon"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.app.Controller","mixins":[],"requires":["Att.ApiResults","Att.Provider","Ext.MessageBox","SampleApp.Config"],"uses":[],"members":[{"name":"control","tagname":"cfg","owner":"SampleApp.controller.mms.Coupon","id":"cfg-control","meta":{"private":true}},{"name":"provider","tagname":"cfg","owner":"SampleApp.controller.mms.Coupon","id":"cfg-provider","meta":{"private":true}},{"name":"refs","tagname":"cfg","owner":"SampleApp.controller.mms.Coupon","id":"cfg-refs","meta":{"private":true}},{"name":"applyProvider","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-applyProvider","meta":{}},{"name":"getControl","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-getControl","meta":{}},{"name":"getProvider","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-getProvider","meta":{}},{"name":"getRefs","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-getRefs","meta":{}},{"name":"loadData","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-loadData","meta":{"private":true}},{"name":"loadPhoneList","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-loadPhoneList","meta":{"private":true}},{"name":"loadSubjectData","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-loadSubjectData","meta":{"private":true}},{"name":"onCloseResponseView","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-onCloseResponseView","meta":{"private":true}},{"name":"onMessageStatus","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-onMessageStatus","meta":{}},{"name":"onSendMms","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-onSendMms","meta":{}},{"name":"setControl","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-setControl","meta":{}},{"name":"setProvider","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-setProvider","meta":{}},{"name":"setRefs","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-setRefs","meta":{}},{"name":"showResponseView","tagname":"method","owner":"SampleApp.controller.mms.Coupon","id":"method-showResponseView","meta":{"private":true}}],"code_type":"ext_define","id":"class-SampleApp.controller.mms.Coupon","component":false,"superclasses":["Ext.app.Controller"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>SampleApp.controller.mms.Coupon</strong></div></div><h4>Requires</h4><div class='dependency'>Att.ApiResults</div><div class='dependency'>Att.Provider</div><div class='dependency'>Ext.MessageBox</div><div class='dependency'><a href='#!/api/SampleApp.Config' rel='SampleApp.Config' class='docClass'>SampleApp.Config</a></div><h4>Files</h4><div class='dependency'><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon' target='_blank'>Coupon.js</a></div></pre><div class='doc-contents'><p>Controller that interacts with the Coupon MMS application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-cfg-control' class='name expandable'>control</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{'att-mms-coupon': {initialize: 'loadData'}, 'att-mms-coupon button[action=sendmessage]': {tap: 'onSendMms'}, 'att-mms-coupon button[action=messagestatus]': {tap: 'onMessageStatus'}, 'actionsheet button[action=close]': {'tap': 'onCloseResponseView'}}</code></p></div></div></div><div id='cfg-provider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-cfg-provider' class='name expandable'>provider</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-refs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-cfg-refs' class='name expandable'>refs</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{view: 'att-mms-coupon', responseView: {xtype: 'apiresults', selector: 'apiresults', hidden: true, autoCreate: true}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyProvider' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-method-applyProvider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-applyProvider' class='name expandable'>applyProvider</a>( <span class='pre'>provider</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets called internally when provider property is set during config initialization. ...</div><div class='long'><p>Gets called internally when provider property is set during config initialization.\nWe'll initialize here our Att.Provider instance to perform the API calls.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : Object<div class='sub-desc'><p>the value we set in config option for this property.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-getControl' class='name expandable'>getControl</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of control. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.mms.Coupon-cfg-control\" rel=\"SampleApp.controller.mms.Coupon-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProvider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-getProvider' class='name expandable'>getProvider</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of provider. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.mms.Coupon-cfg-provider\" rel=\"SampleApp.controller.mms.Coupon-cfg-provider\" class=\"docClass\">provider</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-getRefs' class='name expandable'>getRefs</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of refs. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.mms.Coupon-cfg-refs\" rel=\"SampleApp.controller.mms.Coupon-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-method-loadData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-loadData' class='name expandable'>loadData</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-loadPhoneList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-method-loadPhoneList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-loadPhoneList' class='name expandable'>loadPhoneList</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-loadSubjectData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-method-loadSubjectData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-loadSubjectData' class='name expandable'>loadSubjectData</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onCloseResponseView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-method-onCloseResponseView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-onCloseResponseView' class='name expandable'>onCloseResponseView</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onMessageStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-method-onMessageStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-onMessageStatus' class='name expandable'>onMessageStatus</a>( <span class='pre'>btn, event, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for get Status button. ...</div><div class='long'><p>Handler for get Status button.\nOnce we perform a sendMms call, the mmsId input is populated with the response.\nThat field is used in this function to retrieve the status of the message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>btn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onSendMms' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-method-onSendMms' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-onSendMms' class='name expandable'>onSendMms</a>( <span class='pre'>btn, event, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for send Mms button. ...</div><div class='long'><p>Handler for send Mms button.\nIt will pull the value from address and message inputs to perform a sendMms call.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>btn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-setControl' class='name expandable'>setControl</a>( <span class='pre'>control</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of control. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.mms.Coupon-cfg-control\" rel=\"SampleApp.controller.mms.Coupon-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setProvider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-setProvider' class='name expandable'>setProvider</a>( <span class='pre'>provider</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of provider. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.mms.Coupon-cfg-provider\" rel=\"SampleApp.controller.mms.Coupon-cfg-provider\" class=\"docClass\">provider</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-setRefs' class='name expandable'>setRefs</a>( <span class='pre'>refs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of refs. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.mms.Coupon-cfg-refs\" rel=\"SampleApp.controller.mms.Coupon-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refs</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-showResponseView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mms.Coupon'>SampleApp.controller.mms.Coupon</span><br/><a href='source/Coupon2.html#SampleApp-controller-mms-Coupon-method-showResponseView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mms.Coupon-method-showResponseView' class='name expandable'>showResponseView</a>( <span class='pre'>success, response</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>success</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>response</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});