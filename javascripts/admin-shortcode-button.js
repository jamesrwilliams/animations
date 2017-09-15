(function() {
	tinymce.PluginManager.add('add_shortcodes_menu_button', function(editor, url) {
		editor.addButton( 'add_shortcodes_menu_button', {
			text: 'Shortcodes',
			icon: false,
			type: 'menubutton',
			menu: [
				// Start : Button
				{
					text: 'Button',
					onclick: function() {
						editor.windowManager.open({
							title: 'Insert button attributes',
							body: [
								{
									type: 'textbox',
									name: 'title',
									label: 'Button text'
								},
								{
									type: 'textbox',
									name: 'url',
									label: 'URL'
								},
								{
									type: 'listbox',
									name: 'color',
									label: 'Color',
									values: [
										{ text: '-- Select One --', value: '' },
										{ text: 'White', value: 'white' },
										{ text: 'Primary (default)', value: 'primary' },
										{ text: 'Info', value: 'info' },
										{ text: 'Success', value: 'success' },
										{ text: 'Warning', value: 'warning' },
										{ text: 'Danger', value: 'danger' }
									]
								},
								{
									type: 'listbox',
									name: 'size',
									label: 'Size',
									values: [
										{ text: '-- Select One --', value: '' },
										{ text: 'Extra Small', value: 'extra-small' },
										{ text: 'Small', value: 'small' },
										{ text: 'Medium (default)', value: 'medium' },
										{ text: 'Large', value: 'large' },
										{ text: 'Full Width', value: 'full' }
									]
								},
                                {
                                    type: 'checkbox',
                                    name: 'external',
                                    label: 'Open button in new tab?'
                                }
							],
							onsubmit: function(e) {
								var attributes	= '',
								url				= e.data.url,
								title			= e.data.title,
								color			= e.data.color,
								size			= e.data.size,
								external		= e.data.external;

								if (url) {
									if (external) {
										attributes += ' external="'+url+'"';
									} else {
										attributes += ' url="'+url+'"';
									}
								}
								if (color) {attributes += ' color="'+color+'"';}
								if (size) {attributes += ' size="'+size+'"';}

								if (!title && editor.selection.getContent()) {
									title = editor.selection.getContent();
								}

								editor.insertContent('[button'+attributes+']'+title+'[/button]');
							}
						});
					}
				}
				// End : Button
			]
		});
	});
})();