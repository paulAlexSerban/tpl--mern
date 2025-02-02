const { slugify } = require('@wbk--mern-playground/shared-foundation/lib/nodejs');

module.exports = {
    beforeCreate(createdEvent) {
        const { data } = createdEvent.params;

        if (data.name) {
            data.slug = slugify(data.name, { lower: true });
        }
    },

    beforeUpdate(updatedEvent) {
        const { data } = updatedEvent.params;

        if (data.name) {
            data.slug = slugify(data.name, { lower: true });
        }
    },
};
