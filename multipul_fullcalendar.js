$(function(){
	// div tag id list
	var cal_id = new Array('#first-calendar', '#second-calendar', '#third-calendar');
	for (var i = 0; i < cal_id.length; i++) {
		set_fullcalendar_option(cal_id[i], i);
	}

	// prev button event
	$('#first-calendar .fc-button-prev').click(function(){
		$('#second-calendar').fullCalendar('prev');
		$('#third-calendar').fullCalendar('prev');
	});

	// next button event
	$('#first-calendar .fc-button-next').click(function(){
		$('#second-calendar').fullCalendar('next');
		$('#third-calendar').fullCalendar('next');
	});

	// today button event
	$('#first-calendar .fc-button-today').click(function(){
		// set today
		var date = new Date();
		// set end of last month
		$('#second-calendar').fullCalendar('gotoDate', date.getFullYear(), date.getMonth() -1);
		$('#third-calendar').fullCalendar('gotoDate', date.getFullYear(), date.getMonth() -2);
	});
});

/**
 * @param tag_name
 * @param calendar_num 
 */
function set_fullcalendar_option(tag_name, calendar_num)
{
	var date = new Date();
	var right = '';

	// Only the first calendar a button
	if (0 == calendar_num)
	{
		right = 'prev,today,next';
	}
	else
	{
		//
		var bf_Date = new Date(date.getFullYear(), date.getMonth() - calendar_num);
		date = bf_Date;
	}

	// タブの切り替えを検知するように変更したため
	$(tag_name).fullCalendar('destroy');
	$(tag_name).fullCalendar({

		year:  date.getFullYear(),
		month: date.getMonth(),
		aspectRatio: 1.5,	
		buttonText: {
			prev:     '&lsaquo;', // <
			next:     '&rsaquo;', // >
			prevYear: '&laquo;',  // <<
			nextYear: '&raquo;',  // >>
			today:    'today',
			month:    'month',
			week:     'week',
			day:      'day'
		},
		header: {
			center: 'title',
			right: right
		},
	});
}
