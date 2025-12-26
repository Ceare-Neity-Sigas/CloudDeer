function general_init(path=".")
{
	generalHeader=document.getElementById("general-header");
	generalHeader.style="display:grid; grid-template-columns:repeat(5,1fr); grid-template-rows:repeat(1,1fr)";
	generalHeader.innerHTML=`
	<a href="${path}/index.html" target="_self">CouldDeer</a>
	`;
}