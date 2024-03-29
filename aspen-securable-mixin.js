/**
 * This mixin is used to secure a component.
 * @polymerMixin
 * @mixinFunction
 */
export const AspenSecurableMixin = (superclass) => class extends superclass {
    static get properties(){
        return {

            /** A flag that indicates that the user has the required role. */
            hasRole:{
                type: Boolean,
                notify: true,
                value: false
            }
        };
    }
}
