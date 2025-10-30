// Ensure path points to ../context from inside testMocks folder
jest.mock('../context/SpeciesContext', () => {
  const React = require('react');
  const actual = jest.requireActual('../context/SpeciesContext');

  const mockLoadSpeciesList = jest.fn();
  const mockEnsureLoaded = jest.fn();

  function WrappedSpeciesProvider(props) {
    return React.createElement(
      actual.SpeciesProvider,
      null,
      React.createElement(actual.SpeciesContext.Consumer, null, (ctx) =>
        React.createElement(
          actual.SpeciesContext.Provider,
          {
            value: {
              ...ctx,
              loadSpeciesList: mockLoadSpeciesList, // injected
              ensureLoaded: mockEnsureLoaded, // optional
            },
          },
          props.children
        )
      )
    );
  }

  return {
    ...actual,
    SpeciesProvider: WrappedSpeciesProvider,
    __mocks: { mockLoadSpeciesList, mockEnsureLoaded },
  };
});
console.log('[TEST MOCK] SpeciesContext wrapper loaded');
