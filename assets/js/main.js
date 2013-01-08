/* print one, two, three
------------------------------ */

var count = twig({
    id: "numbers", // id is optional
    data: "<ul>{% for value in numbers %} <li>{{ value }}</li> {% endfor %}</ul>"
});

var output1 = count.render({
    numbers: ["one", "two", "three"]
});

console.log(output1);
$('#numbers').html(output1);


/* print user names template stored inline in JS
------------------------------ 

var userTemplate = twig({
    id: "users", // template id
    data: "<ul>{% for value in users %} <li>{{ value.name }}</li> {% endfor %}</ul>" // template
});

// data
var output2 = userTemplate.render({
    users: [{name:"Alexander"},
		{name:"Barklay"},
		{name:"Chester"},
		{name:"Domingo"},
		{name:"Edward"},
		{name:"Yolando"},
		{name:"Zachary"}]
});

console.log(output2);
$('#usernames').html(output2);
*/


/* print user names from twig template file
------------------------------ */

// template inclusion
var userTemplate = twig({
    id: "users",
    href: "assets/templates/users.twig",
    async: false
});

// data
var output2 = userTemplate.render({
    users: [{name:"Alexander"},
		{name:"Barklay"},
		{name:"Chester"},
		{name:"Domingo"},
		{name:"Edward"},
		{name:"Yolando"},
		{name:"Zachary"}]
});

// output data
console.log(output2);
$('#usernames').html(output2);

