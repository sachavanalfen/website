var grid = document.querySelector('.grid');
var msnry;
// element selectors
var imgAll = document.querySelectorAll('.grid-item');
var imgCoding = document.querySelectorAll('.coding');
var imgEditorial = document.querySelectorAll('.editorial');
var imgIllustration = document.querySelectorAll('.illustration');
var imgInstallation = document.querySelectorAll('.installation');
var imgPoster = document.querySelectorAll('.poster');
var imgTextile = document.querySelectorAll('.textile');
// buttons
const tabsUl = document.getElementById('buttonGroup');
const lis = tabsUl.children;
const gridItems = grid.children;


imagesLoaded(grid, function(){
	msnry = new Masonry( grid, {
		//options
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});

//element & class name
function toggleClass(parentElem, childElems, className){
	for(let i = 0; i <childElems.length; i++){
		if(childElems[i]==parentElem){
			childElems[i].classList.add(className);
		}
		else{
			childElems[i].classList.remove(className);
		}
	}
}

function showImages(showImg, hideImg1, hideImg2){
	for(let i = 0; i < showImg.length; i++){
			showImg[i].style.display = "block";
		}
		for(let i = 0; i < hideImg1.length; i++){
			hideImg1[i].style.display = "none";
		}
		for(let i = 0; i< hideImg2.length; i++){
			hideImg2[i].style.display = "none";
		}
}


tabsUl.addEventListener('click', (event) =>{
	let tabLi = event.target.parentNode;

	toggleClass(tabLi, lis, 'is-active');

	//show all images
	if(event.target.id == "all"){
		for(let i = 0; i< imgAll.length; i++){
			imgAll[i].style.display = "block";
		}
	}

	if(event.target.id == "coding"){
		showImages(imgCoding, imgEditorial, imgIllustration, imgInstallation, imgPoster, imgTextile);
	}

	if(event.target.id == "editorial"){
		showImages(imgEditorial, imgIllustration, imgInstallation, imgPoster, imgTextile, imgCoding);
	}

	if(event.target.id == "illustration"){
		showImages(imgIllustration, imgInstallation, imgPoster, imgTextile, imgCoding, imgEditorial);
	}

	if(event.target.id == "installation"){
		showImages(imgInstallation, imgPoster, imgTextile, imgCoding, imgEditorial, imgIllustration);
	}

	if(event.target.id == "poster"){
		showImages(imgPoster, imgTextile, imgCoding, imgEditorial, imgIllustration, imgInstallation);
	}

	if(event.target.id == "textile"){
		showImages(imgTextile, imgCoding, imgEditorial, imgIllustration, imgInstallation, imgPoster);
	}

	msnry.layout();

});

grid.addEventListener('click',function(event){
	let imgContainer = event.target.parentNode;
	toggleClass(imgContainer, gridItems, 'grid-item__expanded');
	msnry.layout();
});
