
/* Get range from dates */
export const getRangeDate = () => {

    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    return { 
        from: firstDay.toISOString(), 
        to: lastDay.toISOString()
    }
}