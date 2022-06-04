/**
 * This module sets preloader for website
 */
export function controlLoader(){
    $(window).on("load", () => $("#preloader").hide());
}


