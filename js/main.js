


$(function () {
    shuffleElements($('.top'));
});

function shuffleElements($elements) {
    var i, index1, index2, temp_val;

    var count = $elements.length;
    var $parent = $elements.parent();
    var shuffled_array = [];


    // populate array of indexes
    for (i = 0; i < count; i++) {
        shuffled_array.push(i);
    }

    // shuffle indexes
    for (i = 0; i < count; i++) {
        index1 = (Math.random() * count) | 0;
        index2 = (Math.random() * count) | 0;

        temp_val = shuffled_array[index1];
        shuffled_array[index1] = shuffled_array[index2];
        shuffled_array[index2] = temp_val;
    }

    // apply random order to elements
    $elements.detach();
    for (i = 0; i < count; i++) {
        $parent.append($elements.eq(shuffled_array[i]));
    }
}


$(function () {
    shuffleElements($('.info'));
    $('.number').each(function (i) {
        var number = i + 1;
        $(this).append(number);
    });
});

function shuffleElements($elements) {
    var i, index1, index2, temp_val;

    var count = $elements.length;
    var $parent = $elements.parent();
    var shuffled_array = [];


    // populate array of indexes
    for (i = 0; i < count; i++) {
        shuffled_array.push(i);
    }

    // shuffle indexes
    for (i = 0; i < count; i++) {
        index1 = (Math.random() * count) | 0;
        index2 = (Math.random() * count) | 0;

        temp_val = shuffled_array[index1];
        shuffled_array[index1] = shuffled_array[index2];
        shuffled_array[index2] = temp_val;
    }

    // apply random order to elements
    $elements.detach();
    for (i = 0; i < count; i++) {
        $parent.append($elements.eq(shuffled_array[i]));
    }
}



