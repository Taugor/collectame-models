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
			document: { type: FieldTypes.String, validate: () => true },
			signatories: { type: FieldTypes.Object, validate: () => true },
			toNotifyOnConclusion: { type: FieldTypes.Object, validate: () => true }
		};
		this.$fill(properties);
	}
}

export default SignatureProcess;
