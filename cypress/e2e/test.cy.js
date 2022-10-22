describe(
	'When in Firefox',
	{
		browser: 'Firefox',
		viewportWidth: 800,
		viewportHeight: 600
	},
	() => {
		let message = 'before'
		let i = 1
		let links = []
		before(() => {
			cy.visit('/blog')
			cy.get('a').each(link => links.push(link.prop('href')))
			cy.log(links)
		}),
		beforeEach(() => {
			message = `beforeEach x${i}`
			cy.log(message)
			i++
		}),
		it('Does not do much!', () => {
			expect(true).to.equal(true)
		}),
		it('will fail', () => {
			expect(false).to.not.equal(true)
		}),
		it('sub-test', () => {
			expect(true).to.equal(true)
		}),
		links.forEach(link => {
			it(`test url: ${link}`, () => {
				cy.request(link).its('status').should('eq', 200)
			})
		}),
		it.skip('log page links', () => {
			cy.get('a').each(e =>
				cy.request(e.prop('href')).its('status').should('eq', 200)
			)
		})
	}
)
