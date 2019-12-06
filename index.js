
$('ul' ).on("click", '.shopping-item-controls button',function(event){

    $(event.currentTarget).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked')
    
})

$('.shopping-item-delete').on("click", function(event){
    $(event.currentTarget).parent().parent().remove()
})

$('form').on("submit",function(event){
    event.preventDefault()
    const value =this["shopping-list-entry"].value
    const html = `<li>
    <span class="shopping-item">${value}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
    `
    $('ul').append(html);
})