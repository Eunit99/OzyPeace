CB_Pinterest_Pinner=function(selector,not_selector,min_width,min_height)
{function init(selector,not_selector,min_width,min_height)
{jQuery(selector).not(not_selector).each(function(index)
{var extra_css=new Array("margin","margin-top","margin-bottom","margin-left","margin-right","padding","padding-top","padding-bottom","padding-left","padding-right");var already_selected=jQuery(this).attr("cb_pinned");if(already_selected!="true")
{jQuery(this).attr("cb_pinned","true");var height=jQuery(this).height();if(typeof height==="undefined")
{height=jQuery(this).attr("height");}
var width=jQuery(this).width();if(typeof width==="undefined")
{width=jQuery(this).attr("width");}
width=parseInt(width,0);height=parseInt(height,0);min_width=parseInt(min_width,0);min_height=parseInt(min_height,0);if((height===0||height>min_height)&&(width===0||width>min_width))
{var theID='pin_images_'+ index;jQuery(this).wrap('<div class="cb_pin_images" id="'+ theID+'" />');jQuery('#'+ theID).append('<a class="cb_pin_link" href="#"></a>');jQuery('#'+ theID+" a").click(image_click);if(height>0)
{jQuery('#'+ theID).height(height);}
if(width>0)
{jQuery('#'+ theID).width(width);}
var len=extra_css.length;for(var i=0;i<len;i++)
{var css_attr_name=extra_css[i];var css_attr_value=jQuery(this).css(css_attr_name);if(typeof css_attr_value!=="undefined")
{jQuery('#'+ theID).css(css_attr_name,css_attr_value);}}
jQuery('#'+ theID).addClass(jQuery(this).attr("class"));if(height===0||width===0)
{jQuery('#'+ theID+' a.cb_pin_link').hide();jQuery(this).load(function()
{if(jQuery(this).height()>min_height&&jQuery(this).width()>min_width)
{jQuery(this).parent().find('.cb_pin_link').show();}});}}}});}
function image_click(event)
{var url=document.URL;if(url.charAt(url.length- 1)=="/")
{url=url.substring(0,url.length- 1);}
url=encodeURIComponent(url);var media=jQuery(this).prev("img").attr("src");media=encodeURIComponent(media);var description=jQuery(this).attr("title");if(typeof description==="undefined"||jQuery.trim(description)==="")
{description=jQuery(this).prev("img").attr("alt");if(typeof description==="undefined"||jQuery.trim(description)==="")
{description=document.title;}}
var href='http://pinterest.com/pin/create/button/?url='+ url+'&media='+ media+'&description='+ description;event.preventDefault();pin_this(href);}
function pin_this(href)
{window.open(href,"cb_pin_windows","menubar=1,resizable=1,width=800,height=250");}
init(selector,not_selector,min_width,min_height);}
