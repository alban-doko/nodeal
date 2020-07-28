(function () {
    var charts = (function () {
        'use strict';
        tinymce.PluginManager.add("charts", function (editor, url) {

            function _onAction()
            {
                // Open a Dialog
				editor.windowManager.open({
					title: 'Chart Time Series',
					body: {
						type: 'panel',
						items: [
							{
								type: 'input',
								name: 'tl',
								label: 'Title',
							},
							{
								type: 'input',
								name: 'xat',
								label: 'X Attribute',
								inputMode: 'text'
							},
							{
								type: 'input',
								name: 'yat',
								label: 'Y Attribute',
								inputMode: 'text'
							},
							{
							type: 'input',
							name: 'x',
							label: 'X Axis Name'
							},
							{type: 'input',
							name: 'y',
							label: 'Y Axis Name'
							}	
					]
					},
					onSubmit: function (api) {
						// insert markup
						editor.insertContent('<p> <iframe width="600" height="400" seamless="" frameborder="0" scrolling="yes" src="https://chart.googleapis.com/chart?cht=lxy&chs=550x350&chd=t:${properties.'+ api.getData().xat +'}|${properties.'+ api.getData().yat +'}&chds=a&chxs=3,000000,14,0,lt|1,000000,14,0,lt&chtt='+api.getData().tl+'&chxt=x,x,y,y&chxl=1:|'+api.getData().x+'|3:|'+api.getData().y+'|&chxp=1,50|3,50" iframe=""></iframe> </p>');
						 // close the dialog
						 api.close();
					},
					buttons: [
						{
								text: 'Close',
								type: 'cancel',
								onclick: 'close'
						},
						{
								text: 'Insert',
								type: 'submit',
								primary: true,
								enabled: false
						}
					]
				});
			}
		   // Define the Toolbar button
            editor.ui.registry.addButton('charts', {
                text: "Charts",
                onAction: _onAction
            });

            // Define the Menu Item
            editor.ui.registry.addMenuItem('charts', {
                text: 'Charts Menu Item',
                context: 'insert',
                onAction: _onAction
            });
        });
    }());
})();
