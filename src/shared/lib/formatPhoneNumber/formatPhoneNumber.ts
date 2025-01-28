export function formatPhoneNumber(phoneNumber: string): string {
    
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    if (cleaned.length !== 11 || cleaned[0] !== '7') {
        return phoneNumber
    }
    
    const formatted = `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
    
    return formatted;
}