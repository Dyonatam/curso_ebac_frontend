
$(document).ready(function() {

    $('form').on('submit', function(e) {

        e.preventDefault()
        const nova_tarefa = $('#nova-tarefa').val()
        const add_nova_tarefa = $('<li></li>')

        //criar <div> para ser adicionado .appendTo
        //const novoItem = $('<li style="display: none"></li>')
        $(`
            <div class="add-em-lista">
                <h3>${nova_tarefa}</h3>
            </div>
        `). appendTo(add_nova_tarefa)
        $(add_nova_tarefa).appendTo('ul')
    })
})

$(document).on('click', 'div', function(){
    //$('h3',this).appendTo('style=text-decoration: line-through')
    $(this).siblings().removeClass('riscado');
    $(this).toggleClass('riscado');
})