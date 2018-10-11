import { TYPES, generateType } from './Button'

describe('Button generateType', () => {
    it('generate default type', () => {
        const input = {
            primary: undefined,
            secondary: undefined,
            flat: undefined,
            disabled: false
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.DEFAULT);
    });

    it('generate default disable type', () => {
        const input = {
            primary: undefined,
            secondary: undefined,
            flat: undefined,
            disabled: true
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.DEFAULT_DISABLE);
    });

    it('generate primary type', () => {
        const input = {
            primary: true,
            secondary: undefined,
            flat: undefined,
            disabled: false
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.PRIMARY);
    });

    it('generate primary disable type', () => {
        const input = {
            primary: true,
            secondary: undefined,
            flat: undefined,
            disabled: true
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.PRIMARY_DISABLE);
    });

    it('generate secondary type', () => {
        const input = {
            primary: undefined,
            secondary: true,
            flat: undefined,
            disabled: false
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.SECONDARY);
    });

    it('generate secondary disable type', () => {
        const input = {
            primary: undefined,
            secondary: true,
            flat: undefined,
            disabled: true
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.SECONDARY_DISABLE);
    });

    it('generate flat type', () => {
        const input = {
            primary: undefined,
            secondary: undefined,
            flat: true,
            disabled: false
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.FLAT);
    });

    it('generate flat disable type', () => {
        const input = {
            primary: undefined,
            secondary: undefined,
            flat: true,
            disabled: true
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.FLAT_DISABLE);
    });

    it('set undefined input to default', () => {
        const input = {
            primary: undefined,
            secondary: undefined,
            flat: undefined,
            disabled: undefined
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.DEFAULT);
    });

    it('set invalid input to default', () => {
        const input = {
            primary: undefined,
            secondary: "invalid",
            flat: undefined,
            disabled: undefined
        };

        const output = generateType(input.primary, input.secondary, input.flat, input.disabled);
        expect(output).toEqual(TYPES.DEFAULT);
    });
});