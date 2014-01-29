Ext.data.JsonP.SampleApp_view_payment_Subscription({"tagname":"class","name":"SampleApp.view.payment.Subscription","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Subscription.js","href":"Subscription.html#SampleApp-view-payment-Subscription"}],"aliases":{"widget":["att-payment-subscription"]},"alternateClassNames":[],"extends":"Ext.Container","mixins":[],"requires":["Ext.form.FieldSet","Ext.form.Panel","SampleApp.Config","SampleApp.view.Footer","SampleApp.view.Header","ux.ListWindow"],"uses":[],"members":[{"name":"defaults","tagname":"cfg","owner":"SampleApp.view.payment.Subscription","id":"cfg-defaults","meta":{"private":true}},{"name":"scrollable","tagname":"cfg","owner":"SampleApp.view.payment.Subscription","id":"cfg-scrollable","meta":{"private":true}},{"name":"title","tagname":"cfg","owner":"SampleApp.view.payment.Subscription","id":"cfg-title","meta":{"private":true}},{"name":"buildCreateSubsciptionForm","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-buildCreateSubsciptionForm","meta":{}},{"name":"buildShowResponse","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-buildShowResponse","meta":{}},{"name":"buildSubscriptionDetails","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-buildSubscriptionDetails","meta":{}},{"name":"buildSubscriptionDetailsTpl","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-buildSubscriptionDetailsTpl","meta":{}},{"name":"buildSubscriptionStatusForm","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-buildSubscriptionStatusForm","meta":{}},{"name":"getDefaults","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-getDefaults","meta":{}},{"name":"getScrollable","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-getScrollable","meta":{}},{"name":"getTitle","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-getTitle","meta":{}},{"name":"initialize","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-initialize","meta":{"private":true}},{"name":"setDefaults","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-setDefaults","meta":{}},{"name":"setScrollable","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-setScrollable","meta":{}},{"name":"setTitle","tagname":"method","owner":"SampleApp.view.payment.Subscription","id":"method-setTitle","meta":{}}],"code_type":"ext_define","id":"class-SampleApp.view.payment.Subscription","component":false,"superclasses":["Ext.Container"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Container<div class='subclass '><strong>SampleApp.view.payment.Subscription</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.form.FieldSet</div><div class='dependency'>Ext.form.Panel</div><div class='dependency'><a href='#!/api/SampleApp.Config' rel='SampleApp.Config' class='docClass'>SampleApp.Config</a></div><div class='dependency'><a href='#!/api/SampleApp.view.Footer' rel='SampleApp.view.Footer' class='docClass'>SampleApp.view.Footer</a></div><div class='dependency'><a href='#!/api/SampleApp.view.Header' rel='SampleApp.view.Header' class='docClass'>SampleApp.view.Header</a></div><div class='dependency'>ux.ListWindow</div><h4>Files</h4><div class='dependency'><a href='source/Subscription.html#SampleApp-view-payment-Subscription' target='_blank'>Subscription.js</a></div></pre><div class='doc-contents'><p>User Interface for the Payment Subscription application</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaults' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-cfg-defaults' class='name expandable'>defaults</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{scrollable: null}</code></p></div></div></div><div id='cfg-scrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-cfg-scrollable' class='name expandable'>scrollable</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'vertical'</code></p></div></div></div><div id='cfg-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-cfg-title' class='name expandable'>title</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Subscription App'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildCreateSubsciptionForm' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-method-buildCreateSubsciptionForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-buildCreateSubsciptionForm' class='name expandable'>buildCreateSubsciptionForm</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the UI components for Feature 1: Create New Subscription. ...</div><div class='long'><p>Builds the UI components for Feature 1: Create New Subscription.</p>\n</div></div></div><div id='method-buildShowResponse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-method-buildShowResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-buildShowResponse' class='name expandable'>buildShowResponse</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the checkbox configuration to allow user to see the response from API call. ...</div><div class='long'><p>Builds the checkbox configuration to allow user to see the response from API call.</p>\n</div></div></div><div id='method-buildSubscriptionDetails' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-method-buildSubscriptionDetails' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-buildSubscriptionDetails' class='name expandable'>buildSubscriptionDetails</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the UI components for Feature 3: Get Subscription Details. ...</div><div class='long'><p>Builds the UI components for Feature 3: Get Subscription Details.</p>\n</div></div></div><div id='method-buildSubscriptionDetailsTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-method-buildSubscriptionDetailsTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-buildSubscriptionDetailsTpl' class='name expandable'>buildSubscriptionDetailsTpl</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the Ext.XTemplate used by the Subscription Details List. ...</div><div class='long'><p>Builds the Ext.XTemplate used by the Subscription Details List.</p>\n</div></div></div><div id='method-buildSubscriptionStatusForm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-method-buildSubscriptionStatusForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-buildSubscriptionStatusForm' class='name expandable'>buildSubscriptionStatusForm</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the UI components for Feature 2: Get Subscription Status. ...</div><div class='long'><p>Builds the UI components for Feature 2: Get Subscription Status.</p>\n</div></div></div><div id='method-getDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-getDefaults' class='name expandable'>getDefaults</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of defaults. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.Subscription-cfg-defaults\" rel=\"SampleApp.view.payment.Subscription-cfg-defaults\" class=\"docClass\">defaults</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-getScrollable' class='name expandable'>getScrollable</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of scrollable. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.Subscription-cfg-scrollable\" rel=\"SampleApp.view.payment.Subscription-cfg-scrollable\" class=\"docClass\">scrollable</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-getTitle' class='name expandable'>getTitle</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of title. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.Subscription-cfg-title\" rel=\"SampleApp.view.payment.Subscription-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>override ...</div><div class='long'><p>override</p>\n</div></div></div><div id='method-setDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-setDefaults' class='name expandable'>setDefaults</a>( <span class='pre'>defaults</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of defaults. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.Subscription-cfg-defaults\" rel=\"SampleApp.view.payment.Subscription-cfg-defaults\" class=\"docClass\">defaults</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>defaults</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setScrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-setScrollable' class='name expandable'>setScrollable</a>( <span class='pre'>scrollable</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of scrollable. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.Subscription-cfg-scrollable\" rel=\"SampleApp.view.payment.Subscription-cfg-scrollable\" class=\"docClass\">scrollable</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollable</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Subscription'>SampleApp.view.payment.Subscription</span><br/><a href='source/Subscription.html#SampleApp-view-payment-Subscription-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Subscription-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>title</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of title. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.Subscription-cfg-title\" rel=\"SampleApp.view.payment.Subscription-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});