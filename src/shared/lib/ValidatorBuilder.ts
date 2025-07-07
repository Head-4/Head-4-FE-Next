interface ValidationRule {
  validate(value: any): boolean

  errorMessage: string
}

class FormValidator {
  private rules: Record<string, ValidationRule[]> = {}

  addField(fieldName: string, rules: ValidationRule[]): FormValidator {
    if (!this.rules[fieldName]) {
      this.rules[fieldName] = []
    }
    this.rules[fieldName].push(...rules)
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
    message: string = `최소 ${min}글자 이상 입력해주세요`,
  ): ValidatorBuilder {
    this.validator.addField(fieldName, [
      {
        validate: (value) => value.length >= min,
        errorMessage: message,
      },
    ])
    return this
  }

  noDuplicate(
    fieldName: string,
    existingValues: Array<{ notifyId: number; keyword: string }>,
    message: string = '같은 키워드는 추가할 수 없어요',
  ): ValidatorBuilder {
    this.validator.addField(fieldName, [
      {
        validate: (value) =>
          !existingValues?.some((item) => item.keyword === value),
        errorMessage: message,
      },
    ])
    return this
  }

  maxCount(
    fieldName: string,
    currentCount: number,
    maxLimit: number,
    message: string = `최대 ${maxLimit}개까지 추가할 수 있어요`,
  ): ValidatorBuilder {
    this.validator.addField(fieldName, [
      {
        validate: () => currentCount < maxLimit,
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
