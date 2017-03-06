import component2 from '../component2';

/**
 * Component.
 */
class Component {

    /**
     * Component constructor.
     *
     */
    constructor() {
        console.log('component constructor init');

        component2.render('test');
    }

    update() {
        return true;
    }
}

export default Component;
