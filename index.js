function preview(num) {
    document.form.textView.value = document.form.textView.value+num;
}

function solve() {
	document.form.textView.value = eval(document.form.textView.value);
}


function del() {
	document.form.textView.value = '';
}
