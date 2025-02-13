function renderQuestion(q) {
	var str = new String();
	
	str += "<div>\n";
	
	// render question
	str += "\t<h4>" + q.num + ". " + q.question + "</h4>\n";
	
	// render remark (if exists)
	if (q.remark != null)
		str += "\t<p>" + q.remark + "</p>\n";
	
	// render list (if exists)
	if (q.list != null) {
		str += "\t<ol>\n";
		
		for (var i = 0; i < q.list.length; i ++)
			str += "\t\t<li>" + q.list[i] + "</li>\n";

		str += "\t</ol>\n";
	}
	
	// render answers
	str += "\t<ol type=\"A\">\n";
	
	for (var i = 0; i < q.answers.length; i ++) {
		str += "\t\t<li><input type=\"radio\" name=\"q" + q.num + "\" value=\"" + (i + 1 == q.correct ? 1 : 0) + "\" onclick=\"checkAnswer(this);\" />" + q.answers[i] + "</li>\n";
	}
	
	str += "\t</ol>\n";
	
	str += "</div>\n";
	
	return (str);
}

function checkAnswer(input) {
	var inputs = document.getElementsByName(input.name);

	for(var i = 0; i < inputs.length; i ++) {
			inputs[i].disabled = true;
	}

	if (input.value == 1) {
		input.parentNode.setAttribute("style", "background: #0f0;");
	} else {
		input.parentNode.setAttribute("style", "background: #f00;");
		
		var inputs = document.getElementsByName(input.name);
		
		for(var i = 0; i < inputs.length; i ++) {
			if (inputs[i].value == 1)
				inputs[i].parentNode.setAttribute("style", "background: #0f0;");
		}
	}
}