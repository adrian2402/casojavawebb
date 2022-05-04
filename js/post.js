$(document).ready(function () {
    listar();
});

function listar() {
    $.get("pcc", {"opc": 1}, function (data) {
        var x = JSON.parse(data);
        $("#tablita tbody tr").remove();
        for (var i = 0; i < x.length; i++) {
            $("#tablita").append(
                    "<tr><td>" + (i + 1) + "</td><td>" + x[i].idpost + "</td><td>" + x[i].titulo + "</td><td>" + x[i].descripcion + "</td><td><a href='#' onclick='editar(" + x[i].idpost + ")' ><i class='fa-solid fa-pen-to-square'></i></a></td><td><a href='#' onclick='eliminar(" + x[i].idpost + ")'><i class='fa-solid fa-trash-can'></i></a></td><td></tr>");
        }
        ;

    });
}


function editar(id) {
    $.get("pcc", {"id": id, "opc": 4}, function (data) {

        var w = JSON.parse(data);

        $('#editar_titulo').val(w.titulo);
        $('#idm').val(w.idpost);
        $('#editar_descripcion').val(w.descripcion);
    });
    $("#modalEditar").modal('show');

}


function eliminar(id) {

    bootbox.confirm({
        message: "Estas seguro de eliminar?",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $.get("pcc", {"id": id, "opc": 3}, function () {
                    bootbox.alert({
                        message: "Registro eliminado correctamente",
                        size: 'small'
                    });
                    listar();
                });
            } else {
                bootbox.alert({
                    message: "Registro no eliminado",
                    size: 'small'
                });
            }
            ;
        }
    });

}

function guardar() {
    var tit = $("#titulo").val();
    var des = $("#descripcion").val();
    $.post("pcc", {"titulo": tit, "desc": des, "opc": 2}, function () {
        listar();
    });
    $("#exampleModal").modal('hide');
}

function  modificar() {

    var tit = $('#editar_titulo').val();
    var id = $('#idm').val();
    var desc = $('#editar_descripcion').val();

    bootbox.confirm({
        message: "Estas seguro de modificar estos datos?",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $.get("pcc", {"id": id, "titulo": tit , "desc": desc, "opc": 5}, function () {
                    bootbox.alert({
                        message: "Registro actualizado correctamente",
                        size: 'small'
                    });
                    listar();
                    $("#modalEditar").modal('hide');
                });
            } else {
                bootbox.alert({
                    message: "Registro no actualizado",
                    size: 'small'
                });
            }
            ;
        }
    });
}

