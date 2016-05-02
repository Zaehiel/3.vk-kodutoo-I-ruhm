(function(){
   "use strict";
   var Loader = function(){
	   if(Loader.instance){
		   return Loader.instance;
	   }
	   Loader.instance = this;
	  
	   this.data = [];
	   this.load = 0;
	
	   this.initialize();
   };
  
   window.Loader = Loader;
  
	Loader.prototype = {
		initialize: function(){
		/* scrollimise kuularid */
		$(window).on('scroll', function() {
			Loader.instance.scrolling();}
		);
		$(window).scroll(function(){
					Loader.instance.scrolling();
				});		
		/* esimene laadimine */
		this.loadItems();
		/* fancyboxy init */
		$(".fancy").fancybox({
			'padding'			: 0
			});
		},
		loadItems: function (){
			this.load++;                                       
			$.ajax({
			  type: "POST",
			  url: "ajax.php",
			  data: {load:this.load},
			  success: function(data){
					$('.contents').append($(data[0]));
					$('.contents').append($(data[1]));
					$('.contents').append($(data[2]));
			  },
			  dataType: "json",
			});
			 
		},
		scrolling: function(){
			if($(window).scrollTop() == $(document).height() - $(window).height()){
				$(window).unbind('scroll');
				this.loadItems();
			}
		}
	};
		

   $(document).ready(function(){
     var load = new Loader();
	
   });

})();
