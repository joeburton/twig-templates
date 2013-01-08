var Twig = Twig || require("../twig"),
    twig = twig || Twig.twig;

describe("Twig.js Blocks ->", function() {
    it("Should load content in blocks that are not replaced", function() {
        
        twig({
            id:   'remote-no-extends',
            href: 'templates/template.twig',
            async: false
        });

        // Load the template
        twig({ref: 'remote-no-extends'}).render({ }).should.equal("Default Title - body" );
    });


    it("Should replace block content from a child template", function(done) {
        // Test loading a template from a remote endpoint
        twig({
            id:   'child-extends',
            href: 'templates/child.twig',

            load: function(template) {
                template.render({ base: "template.twig" }).should.equal( "Other Title - child" );
                done();
            }
        });
    });

    it("Should support horizontal reuse of blocks", function(done) {
        // Test horizontal reuse
        twig({
            id:   'use',
            href: 'templates/use.twig',

            load: function(template) {
                template.render({ place: "user" }).should.equal( "Coming soon to a user near you!" );
                done();
            }
        });
    });

    it("Should give access to rendered blocks", function(done) {
        // Test rendering and loading one block
        twig({
            id:   'blocks',
            href: 'templates/blocks.twig',

            load: function(template) {
                // Render the template with the blocks parameter
                template.render({ place: "block" }, {output: 'blocks'}).msg.should.equal( "Coming soon to a block near you!" );
                done();
            }
        });
    });
});
