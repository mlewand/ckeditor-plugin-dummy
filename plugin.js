( function() {
	'use strict';

	CKEDITOR.plugins.add( 'dummy', {
		init: function( editor ) {
			console.log( 'Dummy plugin is loaded!' );
		}
	} );
} )();
