var win

tinymce.PluginManager.add('charts', function(editor, url) {
    // Add a button that opens a window
    editor.addButton('charts', {
        text: 'Charts',
        icon: 'line-chart',
        onclick: function() {
            showModal(url);
        }
    });

    // Adds a menu item to the tools menu
    editor.addMenuItem('charts', {
        text: 'Charts',
        context: 'tools',
        onclick: function() {
            // Open window with a specific url
            editor.windowManager.open({
                title: 'TinyMCE site',
                url: 'http://www.tinymce.com',
                width: 800,
                height: 600,
                buttons: [{
                    text: 'Close',
                    onclick: 'close'
                }]
            });
        }
    });
    
    editor.on('init', function() {
		
	});

    var showModal = function(url) {
        // Open window
        win = editor.windowManager.open({
            title: 'Chart',
            body: [
                {type: 'textbox', name: 'title', label: 'Title'},
            ],
            width: 700,
            height: 500,
            onsubmit: function(e) {
                // Insert content when the window form is submitted
                editor.insertContent('Title: ' + e.data.title);
            }
        });
        
        initModal(win);
    };
    
    var initModal = function(win) {
		var id = win._id;
		var body = win.$el.find('div#' + id + '-body')[0];
		body.innerHTML = '<div>'
			+ '<div id="' + id + '-charts-chart-container">'
				+ '<canvas id="' + id + '-charts-chart"></canvas>'
			+ '</div>'
			+ '<div id="' + id + '-charts-data-container">'
				+ '<h2>Data</h2>'
				+ '<div id="' + id + '-charts-data-table-wrapper">'
					+ '<table id="' + id + '-charts-data-table>'
						+ ''
					+ '</table>'
				+ '</div>'
			+ '</div>'
			+ '<div id="' + id + '-charts-options-container">'
				+ '<h2>Options</h2>'
			+ '</div>'
		+ '</div>';
	};
});
