import { FormFieldCacheLocalStorageProvider } from './provider/form-field-cache-local-storage-provider';
import { FormFieldCacheProviderType } from './form-field-cache.handler.model';

export class FormFieldCacheHandler {
    constructor(config) {
        this.config = {
            ...config,
            provider: this.getFormCacheProvider(config.type),
            max: config.max || 10,
        };
    }

    getValues = name => {
        return this.get(name);
    };

    setValues = (name, value) => {
        if (value) {
            this.set(name, value);
        }
    };

    get = key => {
        return this.config.provider.get(key);
    };

    set = (key, value) => {
        if (value) {
            this.config.provider.set(key, value, this.config.max);
        }
    };

    getFormCacheProvider = value => {
        value = value || FormFieldCacheProviderType.LocalStorage;
        switch (value) {
            case FormFieldCacheProviderType.LocalStorage:
                return new FormFieldCacheLocalStorageProvider();
        }
    };
}
