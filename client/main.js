$(function(){

	$('#id_button_send').on('click', function(){
		console.log('onClick#send');
		var statusLabl = $('#id_label_status');
		var timeLabel = $('#id_label_time');
		var dateLabel = $('#id_label_data');
		var startTime = new Date();
		statusLabl.text('ajax start...');
		timeLabel.empty();
		dateLabel.empty();

		$.ajax({
			'type': $('[name=method]').val(),
			'url': $('#id_text_url').val(),
			'dataType': 'json'
		}).done(function(data){
			var endTime = new Date();
			statusLabl.text('ajax success');
			dateLabel.text(JSON.stringify(data));
			timeLabel.text(endTime - startTime + " ms");
		}).fail(function(){
			statusLabl.text('ajax error !!');
		})
	});

});
