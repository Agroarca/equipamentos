<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>{{ config('app.name') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <style>
        body {
            width: 100%;
            font-family: Arial, Helvetica, sans-serif;
        }

        .h1 {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .table-body {
            background-color: #edf2f7;
            width: 100%;
        }

        .table-content,
        .table-title {
            margin: auto;
        }

        .table-content {
            background-color: #F9F9F9;
        }

        .td-content {
            padding: 20px 0;
        }

        .table-content,
        .table-content>tr,
        .table-content>tr>td {
            max-width: 500px;
        }

        .td-info {
            padding: 30px 40px 40px 40px;
            display: block;
        }

        .table-link {
            margin: auto;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        .td-link a {
            color: #F9F9F9;
            background-color: #4c4c4c;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin: auto;
        }

        .text-color{
            color: #212529;
        }
    </style>
</head>

<body>
    <table class="table-body">
        <tr>
            <td class="td-title">
                <table class="table-title">
                    <tr>
                        <td>
                            <h2 class="text-color">{{ config('app.name') }}</h2>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
        <tr>
            <td class="td-content">
                <table class="table-content">
                    <tr>
                        <td class="td-info">
                            <h1 class="text-color">Bem vindo(a) {{$nome}}!</h1>
                            <p class="text-color">Seja bem vindo(a) à Agroarca!, Clique no botão abaixo para confirmar a sua conta.</p>
                            <table class="table-link">
                                <tr>
                                    <td class="td-link">
                                        <a href="{{ $url }}">
                                            <span>Confirmar</span>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p class="text-color">Atenciosamente,<br />Agroarca Equipamentos.</p>
                            <hr />
                            <p class="text-color">Se você está tendo problemas para clicar no botão "Confirmar", copie e cole este link em seu navegador da web: </p>
                            <p>{{ $url }}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
