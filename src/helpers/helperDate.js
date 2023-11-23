export const helperDate = date => {
  const dateArr = date.split(' ')
  const day = date => date[2]
  const month = date => {
    switch (date[1]) {
      case 'Jan':
        return 1
        break;
      case 'Feb':
        return 2
        break;
      case 'Mar':
        return 3
        break;
      case 'Apr':
        return 4
        break;
      case 'May':
        return 5
        break;
      case 'Jun':
        return 6
        break;
      case 'Jul':
        return 7
        break;
      case 'Aug':
        return 8
        break;
      case 'Sep':
        return 9
        break;
      case 'Oct':
        return 10
        break;
      case 'Nov':
        return 11
        break;
      default:
        return 12 
    }
  }

  const year = date => date[3]

  return { dateArr, day, month, year }
}