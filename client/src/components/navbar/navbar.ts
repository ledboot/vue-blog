'use strict';

import Vue from 'Vue';
import { Component, Watch } from 'vue-property-decorator';
import { Link } from './link';

@Component({
    template: require('./navbar.html')
})

export class NavbarComponent extends Vue {

    links: Link[] = [
        new Link('Home', '/'),
        new Link('Inspiration', '/inspiration'),
        new Link('Original', '/original'),
        new Link('About', '/about')
    ];

}