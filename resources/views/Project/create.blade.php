<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Vue App</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    {{-- App styles --}}
    <link href="/css/app.css" rel="stylesheet">

    <style>
        body {
            font-family: 'Nunito';
        }
    </style>
</head>

<body>
    <div id="app" class="container">
        <div class="row">
            <div class="col-sm-12">
                <example></example>
                @include('Project.list')
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-sm-12">
                <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control" v-model="form.name" autocomplete="off">
                        <small class="text-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></small>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" name="description" class="form-control" v-model="form.description"
                            autocomplete="off">
                        <small class="text-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></small>
                    </div>
                    <button type="submit" class="btn btn-primary"
                        v-bind:class="{ isSubmit: form.isSubmit }"
                        :disabled="form.errors.any()">
                        <span class="spinner-border spinner-border-sm" role="status" v-if="form.isSubmit" aria-hidden="true"></span>
                        <span class="sr-only" v-if="form.isSubmit">Loading...</span>
                        Create
                </form>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    {{-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script> --}}
    {{-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script> --}}

    <script src="/js/app.js"></script>

    <script>
        $( document ).ready(function() {
            
        });
    </script>

</body>

</html>
