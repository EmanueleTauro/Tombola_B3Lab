import { spawn_snow, spawnSnowCSS} from "./snow.js";
import {createTable} from "./tombola.js";


let snowflakes_count = 300;

window.onload = function () {
    // Create snowflakes
    spawn_snow(snowflakes_count);
    spawnSnowCSS(snowflakes_count);

    // Create the table for Tombola
    createTable(9, 10);

}