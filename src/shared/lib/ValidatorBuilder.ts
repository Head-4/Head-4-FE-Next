interface ValidationRule {
  validate(value: any): boolean

  errorMessage: string
}

class FormValidator {
  private rules: Record<string, ValidationRule[]> = {}

  addField(fieldName: string, rules: ValidationRule[]): FormValidator {
    this.rules[fieldName] = rules
    return this
  }

  validate(formData: Record<string, any>): Record<string, string[]> {
    const errors: Record<string, string[]> = {}

    for (const [fieldName, rules] of Object.entries(this.rules)) {
      const value = formData[fieldName]
      const fieldErrors: string[] = []

      for (const rule of rules) {
        if (!rule.validate(value)) {
          fieldErrors.push(rule.errorMessage)
        }
      }

      if (fieldErrors.length > 0) {
        errors[fieldName] = fieldErrors
      }
    }

    return errors
  }
}

export class ValidatorBuilder {
  private validator = new FormValidator()

  required(
    fieldName: string,
    message: string = '해당 필드를 입력해주세요.',
  ): ValidatorBuilder {
    this.validator.addField(fieldName, [
      {
        validate: (value) =>
          value !== null && value !== undefined && value !== '',
        errorMessage: message,
      },
    ])
    return this
  }

  minLength(
    fieldName: string,
    min: number,
    message: string = `최소 입력 글자는 ${min}글자 입니다.`,
  ): ValidatorBuilder {
    this.validator.addField(fieldName, [
      {
        validate: (value) => value?.length >= min,
        errorMessage: message,
      },
    ])
    return this
  }

  custom(
    fieldName: string,
    validator: (value: any) => boolean,
    message: string,
  ): ValidatorBuilder {
    this.validator.addField(fieldName, [
      {
        validate: validator,
        errorMessage: message,
      },
    ])
    return this
  }

  build(): FormValidator {
    return this.validator
  }
}
