const reviews = [
  {
    id: 1,
    name: 'Inventory Database Management - CENSAI™',

    date: 'Aug 2020 – Nov 2020',

    text:
      ' Developed forms to maintain and update the SKU’s and corresponding bill of materials in MS Access.Set up an alert system when the inventory falls below a ‘critical point’ defined by the client.Automated the process of importing inventory data from MS Excel.',
  },
  {
    id: 2,
    name: 'Web Scraping and Time Series Analysis of Stock Market Data',

    date: 'Aug 2020 – Nov 2020',

    text:
      ' Web scrapped the stock prices from Yahoo Finance and exported the data to an excel file. Performed ARIMA analysis on the data to predict the stock behavior. It was concluded that this model gave a good prediction of the trend of the stock but not a very accurate prediction of the stock value.LSTM model was implemented, this model proved to be more efficient in predicting the overall trend as well as the stock value.',
  },
  {
    id: 3,
    name: 'Analyzing Streaming data from Twitch',

    date: 'Sep 2020',

    text:
      'Analyzed the streaming data from Twitch in MySQL to create categorical data tables. Trends in categories like the most popular game, preferred streaming device, the busiest time of the day were explored. Visualized the trends in the analyzed data using matplotlib in python.',
  },
  {
    id: 4,
    name: 'Marketing Funnel Analysis and A/B Testing',

    date: 'May 2020',

    text:
      ' Analysed a marketing funnel data set from an online retailer using MySQL to check which step filters out the majority of the customers. A/B tested two marketing strategies to find out which model worked the best.',
  },
  {
    id: 5,
    name:
      'Dynatrol Corporation: Andover Assembly Division (Harvard Business School Case Study)',
    date: 'Nov 2019',

    text:
      'Analysed the capacity of production line considering the rework and setup time and their effects on the WIP inventory level.Evaluated production control techniques like Kanban and drum buffer rope to reduce the variability in cycle time.',
  },
  {
    id: 6,
    name:
      'Blanchard Importing & Distributing Co. Inc. (Harvard Business School Case Study)',
    date: 'Oct 2019',

    text:
      '  Suggested an alternate approach to correctly calculate the cost coefficients. Developed a Wagner-within algorithm, which was more efficient than the current model to reduce the inventory level.Computed a service level increase in the range of 10-15% with the suggested Wagner-within inventory model.',
  },
]

export default reviews
