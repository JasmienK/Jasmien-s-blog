var teller = 0;

function main() {
      var letterArray = [
            "http://holidaysgenius.com/media/uploads/2015/08/Beach-in-Thailand-Wallpaper.jpg",
            "https://secure.static.tumblr.com/3c7f0ed20675d9324a60e886a925a5f9/uo4hba7/3lzmxmwqd/tumblr_static_62679_1600x1200-wallpaper-cb1359732365.jpg",
            "http://cdn.pcwallart.com/images/california-palm-trees-tumblr-background-wallpaper-1.jpg",
            "http://onlybackground.com/wp-content/uploads/2015/11/best-forest-wallpaper-tumblr.jpg",
            "http://static.tumblr.com/2342d30b9b026289a10960e10d0fc55e/fv0vh9t/SSDnoxl5e/tumblr_static_442nb74ho1k4owggcgg8cc0gg_2048_v2.jpg"
      ];
      var mijnBody = document.getElementsByClassName("banner")[0];
      if (teller < (letterArray.length-1)) {
            mijnBody.style.backgroundImage = "url('" + letterArray[teller] + "')";
            teller++;
      } else {
            mijnBody.style.backgroundImage = "url('" + letterArray[teller] + "')";
            teller = 0;
      }
}

window.onload = function() {
      setInterval(main, 5000);
}
