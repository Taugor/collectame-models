import { ModelBase, FieldTypes, Validator } from '@zerobytes/object-model-js';
/**
 * @type Task
 */
class SignatureProcess extends ModelBase {
	constructor(properties = null) {
		super('signatureProcess');
		this.$fieldConfig = {
			company: { type: FieldTypes.String, validate: () => true },
			safeBox: { type: FieldTypes.String, validate: () => true },
			description: { type: FieldTypes.String, validate: () => true },
			document: { type: FieldTypes.Object, defaultValue: {}, validate: () => true },
			signatories: { type: FieldTypes.Array, defaultValue: [], validate: () => true },

			toNotifyOnConclusion: {
				type: FieldTypes.Object,
				defaultValue: {},
				validate: () => true
			}
		};
		this.$fill(properties);
	}
}

export default SignatureProcess;
