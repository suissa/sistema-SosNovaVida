document.getElementById("menuLateral").innerHTML =
'<div>' +
    '<div class="navbar-header">' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-navbar" aria-expanded="false">' +
            '<span class="sr-only">Toggle navigation</span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
        '</button>' +
        //'<a class="navbar-brand" href="#">SOS Nova Vida</a>' +
    '</div>' +
    '<div class="collapse navbar-collapse" id="collapse-navbar">' +
        '<ul class="nav col-md-12">' +
            '<li role="presentation" class="dropdown">' +
                '<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">' +
                'Acolhidos <span class="caret"></span></a>' +
                '<ul class="dropdown-menu">' +
                    '<li><a href="formAcolhido.html">Cadastrar</a></li>' +
                    '<li><a>Consultar</a></li>' +
                '</ul>' +
            '</li>' +
            '<li class="dropdown">' +
                '<a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
                'Doadores <span class="caret"></span></a>' +
                '<ul class="dropdown-menu">' +
                    '<li><a>Cadastrar</a></li>' +
                    '<li><a>Consultar</a></li>' +
                '</ul>' +
            '</li>' +
            '<li><a>Doações</a></li>' +
            '<li class="dropdown">' +
                '<a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
                'Estoque <span class="caret"></span></a>' +
                '<ul class="dropdown-menu">' +
                    '<li><a>Inserir produto</a></li>' +
                    '<li><a>Retirar produto</a></li>' +
                    '<li><a>Consultar</a></li>' +
                '</ul>' +
            '</li>' +
            '<li><a>Contabilidade</a></li>' +
            '<li><a>Usuários</a></li>' +
            '<li><a>Configurações</a></li>' +
        '</ul>' +
    '</div>' +
'</div>'
;