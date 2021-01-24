<h2>Project list</h2>
<ul>
    @foreach ($projects as $project)
        <li>{{ $project->name }}</li>
    @endforeach
</ul>
