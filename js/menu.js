$(document).ready(function(){
    $('#salads').show()
		$('#saladLink').addClass("selectedMenu")
    $('#sandwiches').hide()
		$('#incredibowls').hide()
		$('#dinner-combos').hide()
		$('#family-meals').hide()
		$('#baskets').hide()
		$('#sides').hide()
    $currentDiv = $('#salads')
		$currentLink = $('#saladLink')
})

	var locked = false
  function changeMenu(divID,linkID){
		if(!locked){
    $newDiv = $(divID)
		$newLink = $(linkID)
    if($currentDiv.selector==$newDiv.selector){
      return;
        }
    else{
				locked = true
				$currentLink.removeClass("selectedMenu")
				$newLink.addClass("selectedMenu")
        $currentDiv.fadeToggle("slow",function(){$newDiv.fadeToggle("slow");
        $currentDiv = $newDiv
				$currentLink = $newLink
				locked = false
        })
    	}
  	}
	}