Ext.define('KitchenSink.view.testWAPonly', {
    extend: 'Ext.Container',
    xtype: 'attTestWAP',

	requires: [
       'Att.Provider',
	   'KitchenSink.view.config'
    ],
	
    config: {
        provider: undefined,
        title: 'Test WAP',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },
        items: {
            xtype: 'container',
            width: '80%',
           items:[{
                xtype: 'fieldset',
                defaults: {
                    labelWidth: 120
                },
                items: [

                ]
            }, {
                xtype: 'button',
                text: 'Test WAP',
                action: 'attTest',
                style: 'margin-bottom: 10px;'
            }]
        },
        control: {
            'button[action=attTest]': {
                tap: 'onPush'
            }
        }
    },
	
	onPush: function() {
        provider = Ext.create('Att.Provider',{
			apiBasePath: '/att'
        });
		var cfg = KitchenSink.view.config;
		Ext.Viewport.hide();
		basicWAPTests(cfg);
		positiveWAPTests(cfg);
		negativeWAPTests(cfg);
		//pairwiseWAPTests();
	}
});
