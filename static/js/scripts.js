$("#codeTabs a").click(function (e) {
	e.preventDefault();
	$(this).tab("show");
});


$('.code-block').each(function(index){
	if (index < 10) {
		$(this).find('h3').text("0"+index + ". " + $(this).find('h3').text());
	} else {
		$(this).find('h3').text(index + ". " + $(this).find('h3').text());
	}
});

$('.mobile-button').click(function(){
	if ( $('.navbar-nav').hasClass('closed') ) {
		$('.navbar-nav').removeClass('closed');
	} else {
		$('.navbar-nav').addClass('closed');
	}
});

$('.hover-info').hover(function(){
	var info = $(this).data('hover');
	$(this).append('<div class="hover-info-after">' + info + '</div>');
}, function() {
	$('.hover-info-after').remove();
});

// Code Examples
function reverseString(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

function findLongestWord(str) {
    var arr = str.split(' ');
    var longest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}

function titleCase(str) {
    var arr = str.toLowerCase().split(' ');
    var ignore = ['a','of','the','in','is','at','with','and'];
    for (var i = 0; i < arr.length; i++) {
        if (ignore.indexOf(arr[i]) != -1 && i > 0 && i < arr.length - 1)
            continue;
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    arr = arr.join(' ');
    return arr;
}

function truncateString(str, num) {
    if (num <= 3) {
        return str.slice(0, num) + "...";
    } else if (str.length > Number(num) + 3) {
        return str.slice(0, num) + "...";
    }
    return str;
}

function factorialize(num) {
    if (num <= 1){
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}