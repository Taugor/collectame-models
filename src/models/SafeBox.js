import { ModelBase, FieldTypes, Validator } from '@zerobytes/object-model-js';

/**
 * @type Signing
 */
class SafeBox extends ModelBase {
	constructor(properties = null) {
		super('safeBox');
		this.$fieldConfig = {
			company: { type: FieldTypes.String, validate: () => true },
			parent: { type: FieldTypes.String, validate: () => true },
			name: { type: FieldTypes.String, validate: () => true },
			description: { type: FieldTypes.String, validate: () => true },
			dokiaId: { type: FieldTypes.String, validate: () => true },
			dokiaIdentifier: { type: FieldTypes.String, validate: () => true },
			dokiaCompanyId: { type: FieldTypes.String, validate: () => true }
		};
		this.$fill(properties);
	}
}

export default SafeBox;
