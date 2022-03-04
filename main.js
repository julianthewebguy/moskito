    jQuery(document).ready(function () {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

            var listingFooter = jQuery('<div id="mid-footer"><img src="https://mediavault.point2.com/p2a/htmltext/9f22/cb6b/4c5f/ad5d53a2ca071feda4ba/original.jpg" height="767px" width="1920px" alt="Moskito Real Estate Team" /><div class="footer-flexContainer"> <div class="footer-flex footer-left"><img class="footer-logo" src="https://mediavault.point2.com/p2a/htmltext/ef36/b325/492e/82325a8c5bc38ce8bf59/original.png" alt="Playa del Carmen Real Estate by Moskito" /><h3>Moskito Real Estate</h3><p class="footerContact"> Av. 10 esq.14 bis 2nd floor<br />Playa del Carmen, Mexico<br /><span class="no-mobile">Call us Now:</span><span class="mobile-only">Tap to Call:</span> <a href="tel:+5219841055280">+521 984-105-5280</a><br /><a href="mailto:sales@moskitopm.com">sales@moskitopm.com</a></p><p>Moskito is based in Playa del Carmen and specializes in turnkey solutions for real estate, vacation rentals, and property management since 2005. We have offices in Playa del Carmen and Tulum, covering the entire Riviera Maya.</p><div class="footer-social"><a href="https://www.instagram.com/moskitorealestate/" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/350e/7062/0c87/3924de69f8c9520ec08e/original.png" alt="Instagram" /></a> <a href="https://www.facebook.com/moskitoplayadelarmenrealestate/" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/330e/918b/4d63/336326eb460bea79c226/original.png" alt="Facebook" /></a> <a href="https://www.youtube.com/channel/UCq7iItQEgJHm7YEWAnpxvOQ" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/e393/4eaa/d7c7/77d2203b1b49f9f84feb/original.png" alt="YouTube" /></a></div> </div> <div class="footer-flex"><h3 class="title">Riviera Maya Real Estate</h3> <ul> <li ><a href="https://www.realestateplayadelcarmen.com.mx/All_listings/page_2588122.html">All Real Estate Listings</a></li> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Playa_del_Carmen_real_estate/page_2588115.html">Playa del Carmen Real Estate</a></li> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Playacar_real_estate/page_2588116.html">Playacar Real Estate</a></li> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Tulum_real_estate/page_2588118.html">Tulum Real Estate</a></li> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Puerto_Aventuras_real_estate/page_2657766.html">Puerto Aventuras Real Estate</a></li> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Akumal_real_estate/page_2588119.html">Akumal Real Estate</a></li> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Homes_for_Sale_in_Riviera_Maya/page_2691264.html">Homes for Sale in Riviera Maya</a></li> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Condos_for_Sale_in_Riviera_Maya/page_2691265.html">Condos for Sale in Riviera Maya</a></li> </ul> </div> <div class="footer-flex"> <h3 class="title">Resources</h3> <ul> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Buying_Real_Estate_Riviera_Maya/page_2587455.html">Buying Real Estate Riviera Maya</a></li> <li ><a href="https://www.realestateplayadelcarmen.com.mx/Selling_real_estate_Riviera_Maya/page_2587456.html">Selling Real Estate Riviera Maya</a></li> <li ><a href="http://www.moskitoplayadelcarmen.com/propertymanagement/index.php">Property Management Riviera Maya</a></li> <li ><a href="http://blog.realestateplayadelcarmen.com.mx/">Blog</a></li><li ><a href="https://www.realestateplayadelcarmen.com.mx/Our_Team/page_2587454.html">Meet our Team</a></li><li ><a href="https://www.realestateplayadelcarmen.com.mx/Testimonials/page_2610631.html">Testimonials</a></li><li ><a href="/Search_by_map/page_2661206.html">Search by Map</a></li><li ><a href="/Advanced_Search/page_2691106.html">Advanced Real Estate Search</a></li></ul> </div></div><p><img alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p></div><div id="final-footer">Copyright &copy; 2020 Moskito Real Estate. All Rights Reserved. <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada.</div></div>');

            jQuery('body').append(listingFooter);
        }
        jQuery(".row-fluid").last().addClass("footerBG");
    });

    function addCustomClasses() {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var headerDiv = document.getElementsByClassName('maindiv')[0];
        }
        else {
            var headerDiv = document.getElementsByClassName('row-fluid')[1];
        }
        headerDiv.classList.add('headerBG');
    }
    document.ready = addCustomClasses;

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        // Get the header depending on whether we're on a listing page or not
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var header = document.getElementsByClassName('maindiv')[0];
            //console.log('AM');
        }
        else {
            var header = document.getElementsByTagName('header')[1];
        }
        // Get the offset position of the navbar
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    ; (function ($) {
        // DOM ready
        $(function () {
            // Append the mobile icon nav
            $('.nav').append($('<div class="nav-mobile"></div>'));
            // Add a <span> to every .nav-item that has a <ul> inside
            $('.nav-item').has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');
            // Click to reveal the nav
            $('.nav-mobile').click(function () {
                $('.nav-list').toggle();
            });
            // Dynamic binding to on 'click'
            $('.nav-list').on('click', '.nav-click', function () {

                // Toggle the nested nav
                $(this).siblings('.nav-submenu').toggle();

                // Toggle the arrow using CSS3 transforms
                $(this).children('.nav-arrow').toggleClass('nav-rotate');

            });
            $('.nav-list').on('click', '.mobile-trigger', function () {
                // Toggle the nested nav
                $(this).siblings('.nav-submenu').toggle();

                // Toggle the arrow using CSS3 transforms
                $(this).prev().toggleClass('nav-rotate');

            });
        });
    })(jQuery);
