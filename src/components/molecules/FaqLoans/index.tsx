import Image from 'next/image'
import React from 'react'
import icWallet from '/public/assets/icons/wallet.svg'
import icLightbulb from '/public/assets/icons/lightbulb.svg'
import icChartBoard from '/public/assets/icons/chart-board.svg'
import icThrophy from '/public/assets/icons/trophy.svg'
import icTarget from '/public/assets/icons/target.svg'
import icKey from '/public/assets/icons/key.svg'
import Link from 'next/link'

const FaqLoans = () => {
  return (
    <div className="flex flex-col w-full h-full pt-8 mb-16 items-center justify-center">
      <div className="flex flex-col max-w-[1024px]">
        <div className="flex flex-col text-center items-center justify-center">
          <h1 className="font-bold text-3xl">
            LENDELA'S GUIDE TO THE BEST PERSONAL LOAN IN SINGAPORE
          </h1>
          <p className="text-l max-w-[700px] text-center mt-4">
            How do you find the best personal loan in Singapore the easy way?
            Take a few minutes and read our guide below, and you will have all
            the important information you need before applying for a personal
            loan online with Lendela. If you still have questions, feel free to
            contact our Customer Relationship Team for help.
          </p>
        </div>
        <div
          className="w-full grid grid-cols-5 gap-0 items-start mt-16"
          //
        >
          <div className="col-span-1">
            <Link href={'/#personal-loan'} scroll={false}>
              <h3 className="py-3 font-bold text-green-500 border-b-2">
                What is a personal loan?
              </h3>
            </Link>
            <Link href={'/#debt-consolidation'} scroll={false}>
              <h3 className="py-3 font-bold text-green-500 border-b-2">
                Debt Consolidation
              </h3>
            </Link>
            <Link href={'/#student-loan'} scroll={false}>
              <h3 className="py-3 font-bold text-green-500  border-b-2">
                Student Loan
              </h3>
            </Link>
            <Link href={'/#cash-loan'} scroll={false}>
              <h3 className="py-3 font-bold text-green-500  border-b-2">
                Cash Loan
              </h3>
            </Link>
            <Link href={'/#renovation-loan'} scroll={false}>
              <h3 className="py-3 font-bold text-green-500  border-b-2">
                Renovation Loan
              </h3>
            </Link>
            <Link href={'/#car-loan'} scroll={false}>
              <h3 className="py-3 font-bold text-green-500  border-b-2">
                Car Loan
              </h3>
            </Link>
            <Link href={'/#wedding-loan'} scroll={false}>
              <h3 className="py-3 font-bold text-green-500  border-b-2">
                Wedding Loan
              </h3>
            </Link>
            <Link href={'/#lendela-help'} scroll={false}>
              <h3 className="py-3 font-bold text-green-500  border-b-2">
                How does Lendela help you find the best personal loan in
                Singapore?
              </h3>
            </Link>
            <button className="w-full h-[48px] rounded-lg bg-green-500 mt-4">
              <p className="text-white font-bold text-lg">COMPARE NOW</p>
            </button>
          </div>
          <div className="col-span-4 ml-6 max-h-[700px] overflow-y-scroll scrollbar-hide ">
            <div className="w-full border border-1 p-6" id="personal-loan">
              <Image src={icWallet} height={64} alt="icon" />
              <h1 className="font-bold text-xl py-2">
                What is a personal loan?
              </h1>
              <div className="h-[1px] bg-slate-300" />
              <p className="py-2">
                A personal loan is money borrowed for{' '}
                <span className="font-bold">personal use</span>, such as paying
                off credit card debt, buying home gadgets, home or kitchen
                renovation, embarking on a special vacation, education, medical
                or wedding expenditure, or emergencies.{' '}
                <span className="font-bold">Personal loans</span> are also
                called consumer loans and are not usually backed by collateral.
                Banks typically begin the process by determining your credit
                score to assess whether you are eligible for a personal loan in
                Singapore and what interest rate should be placed on the loan.
                Making repayments on the loan usually involves making principal
                and interest payments monthly. The interest rates that are fixed
                on personal loans in Singapore will be determined by your credit
                history. Personal loans can be a good solution for individuals
                with financial issues that need to be resolved instantly. It
                also enables huge purchases and repayments at your own pace.
              </p>
            </div>

            <div
              className="w-full border border-1 p-6 mt-8"
              id="debt-consolidation"
            >
              <Image src={icLightbulb} height={64} alt="icon" />
              <h1 className="font-bold text-xl py-2">Debt Consolidation</h1>
              <div className="h-[1px] bg-slate-300" />
              <p className="py-2">
                It can be overwhelming to stay on top of your debt load when
                your balances are spread across a number of different credit
                cards or loans, especially if you are swimming in heavy debt.
                <span className="font-bold">Debt consolidation </span>can be an
                effective financial strategy for those struggling to keep up
                with their personal loans. Getting your debt consolidated helps
                you <span className="font-bold">stay organised</span>, better
                manage your monthly payments, and ultimately turn your finances
                around. It can also save you a significant amount of money over
                time and the stresses that come with it.
              </p>
              <h3 className="font-bold text-1xl py-2">
                What is Debt Consolidation?
              </h3>
              <p className="py-2">
                Simply put, debt consolidation is a way of{' '}
                <span className="font-bold">combining all your debts</span> into
                one single consolidated monthly payment. So instead of making
                multiple individual debt payments each month, you will simply
                have to pay one monthly payment to your new bank.{' '}
                <span className="font-bold">Debt consolidation plans</span> are
                only used for unsecured credit facilities, in other words, loans
                that are not backed by collateral.
              </p>
              <p className="py-2">
                Besides greatly simplifying the process of payment, a major
                benefit of debt consolidation is that it can{' '}
                <span className="font-bold">lower your interest rate</span> and
                help you build a better credit score. This means that over time,
                you will pay a significantly lower aggregate cost when compared
                to repaying individual debts, thereby relieving financial
                pressure.
              </p>
              <h3 className="font-bold text-1xl py-2">
                How does a debt consolidation loan work?
              </h3>
              <p className="py-2">
                To get your debt consolidated, you will need to take out a{' '}
                <span className="font-bold">debt consolidation loan</span>. The
                eligibility requirement for a debt consolidation loan from a
                bank in Singapore is an aggregate debt of more than{' '}
                <span className="font-bold">12 times your monthly salary</span>,
                but there are instances when banks may approve a smaller debt
                consolidation amount.
              </p>
              <p className="py-2">
                When you first consolidate your debt loan, there will also be an
                additional 5% allowance over your total outstanding balance,
                given directly to the bank you had borrowed money from. This
                allowance is used to take care of possible fees that may be
                incurred from the time that your loan is consolidated to when
                you receive the funds. It cannot be deposited into your checking
                account.
              </p>
              <p className="py-2">
                Once you have settled your debt consolidation plan, you only
                need to pay a{' '}
                <span className="font-bold">single loan each month</span>.
                Although the loan tenure may be longer, the borrower may enjoy a
                lower interest rate and free themselves from the stress of
                dealing with multiple debt collectors. Singapore has a number of
                banks and financial institutions that provide debt consolidation
                to Singapore citizens and permanent residents. With Lendela, you
                can easily find the best debt consolidation loan for your needs
                and put yourself on the right path to achieving{' '}
                <span className="font-bold">financial freedom</span>.
              </p>
            </div>

            <div className="w-full border border-1 p-6  mt-8" id="student-loan">
              <Image src={icChartBoard} height={64} alt="icon" />
              <h1 className="font-bold text-xl py-2">Student Loan</h1>
              <div className="h-[1px] bg-slate-300" />
              <p className="py-2">
                Education can be a powerful tool for upward economic mobility,
                but there is also no denying that tertiary education does not
                come cheap in Singapore. In addition to tuition fees, there are
                also a host of other related fees that adds to the financial
                strain on students, including textbooks, accommodation, and
                more. It is common practice for{' '}
                <span className="font-bold">students to take out a loan</span>{' '}
                to help finance their higher education. This is where a student
                loan, also known as an education loan, can come in handy.{' '}
              </p>
              <h1 className="font-bold text-xl py-2">
                What is a student loan?
              </h1>
              <p className="py-2">
                A student loan is a type of{' '}
                <span className="font-bold">unsecured personal loan</span>{' '}
                designed to help students pay for their higher-education
                expenses. Similar to other personal loans, the loan amount is
                usually repaid through regular instalments over the course of a
                few months or years, with interest and any other additional
                fees. Typically, student loans offered by banks in Singapore
                have a minimum loan amount of $1,000, while the maximum loan
                limit can be up to 8 times the monthly income of the guarantor.
              </p>
              <h1 className="font-bold text-xl py-2">
                Who can qualify to apply for a student loan?
              </h1>
              <p className="py-2">
                <span className="font-bold">
                  Requirements for student loans
                </span>{' '}
                vary from bank to bank, but typically, you will need to be a
                Singapore citizen or a Permanent Resident, between 18-60 years
                of age, and have a minimum annual income of $18,000. For
                students without a steady stream of income, you will need a{' '}
                <span className="font-bold">loan guarantor</span> with an annual
                income of at least $30,000. Your parents or sponsor can apply on
                your behalf, or you may file a joint application with multiple
                sponsors. Not all student loans are created equal, so to ensure
                you can free yourself from debt as fast and as stress-free as
                possible, it is important for you to find a student loan that
                has a lower interest rate, suitable loan tenure, and caters for
                your personal needs and financial circumstances. There are
                numerous student loan options in Singapore, each with different
                requirements and conditions, and Lendela is dedicated to helping
                you save time used in comparing the different options. It
                provides you with a list of tailored student loan offers so that
                you can apply for the most suitable option quickly and with
                ease.
              </p>
            </div>

            <div className="w-full border border-1 p-6  mt-8" id="cash-loan">
              <Image src={icThrophy} height={64} alt="icon" />
              <h1 className="font-bold text-xl py-2">Cash Loan</h1>
              <div className="h-[1px] bg-slate-300" />
              <p className="py-2">
                Life has its way of throwing curveballs at you when you least
                expect it. And at some point or another, you may find yourself
                in a tough financial situation and in need of some unexpected
                cash. Whether it’s to cover a sudden business expense or to meet
                family emergencies, cash loans can be an excellent way to get
                quick and direct access to funds and help get you through
                challenging times.
              </p>
              <h1 className="font-bold text-xl py-2">What are cash loans?</h1>
              <p className="py-2">
                Cash loans are a type of unsecured, short-term personal loan
                meant to help you cover unexpected costs. They can range from
                around $1,000 to $5,000, with the amount given to you in one
                lump sum and repaid in regularly scheduled payments with
                interest. Cash loans are a very popular form of loan in
                Singapore because they do not involve collateral, allow a
                greater degree of flexibility in terms of how you use the funds
                and have a relatively fast and relaxed approval process compared
                to standard personal loans. Yet, at the same time, they usually
                involve a higher interest rate.
              </p>
              <h1 className="font-bold text-xl py-2">
                How do cash loans work?
              </h1>
              <p className="py-2">
                Designed to quickly help individuals address their short-term
                cash needs, cash loans have a simple and straightforward
                application process. They do not require a large amount of
                paperwork and have minimal eligibility requirements. To qualify
                for a cash loan, you should be aged 18-70 years old, have a
                minimum monthly income of $1,200 and be a salaried Singaporean,
                Permanent Resident or Employment Pass holder. Ease of
                application entails that even those with a poorer credit score
                could apply for a cash loan. However, it is important to note
                that having a good credit score can help you obtain a lower
                interest rate.
              </p>
              <p className="py-2">
                Since cash loans are unsecured, banks bear a higher risk of
                default, which is offset by a higher interest rate on the loan.
                This means that when it comes to applying for a cash loan, it is
                crucial that you carefully review your options and find an offer
                with an interest rate that you can afford. Otherwise, you may
                risk putting yourself in further debt. Lendela helps you quickly
                find the best cash loans available to you in Singapore, so that
                you can make the best possible financial decision. You only need
                to fill out a short online application form, and you will
                receive multiple offers within minutes.
              </p>
            </div>

            <div
              className="w-full border border-1 p-6  mt-8"
              id="renovation-loan"
            >
              <Image src={icTarget} height={64} alt="icon" />
              <h1 className="font-bold text-xl py-2">Renovation Loan</h1>
              <div className="h-[1px] bg-slate-300" />
              <p className="py-2">
                Home improvement can be a massive and costly endeavour,
                especially if you’re already feeling a bit strapped for cash
                after paying the down payment for your new home purchase. Be it
                replacing old appliances, putting in new floors, or repainting
                the walls, even little upgrades here and there can add up to
                tens of thousands of dollars. But that doesn’t have to stop you
                from living in your dream home. Getting a renovation loan is a
                popular solution for property owners in Singapore looking to
                finance their home improvement projects.{' '}
              </p>
              <h1 className="font-bold text-xl py-2">
                What is a renovation loan?
              </h1>
              <p className="py-2">
                A renovation loan is a form of unsecured loan that allows
                homeowners to avail funds for home improvement and maintenance
                purposes immediately, and repay the money in instalments with
                interest over an agreed-upon period of time, usually between one
                to five years. In Singapore, there is usually a maximum loan
                limit of $30,000 or six times your monthly salary, depending on
                whichever amount is lower, as well as a minimum income
                requirement of around $24,000 to $30,000.
              </p>
              <p className="py-2">
                The credit advanced to you is not to be diverted to any other
                purposes. That being said, a renovation loan can still cover a
                wide array of expenses, including fixing damaged flooring and
                electrical and plumbing systems, remodelling the house, interior
                and exterior decor, and even the home expansion projects like
                building a new patio or garage.{' '}
              </p>
              <h1 className="font-bold text-xl py-2">
                What are the benefits of a renovation loan?
              </h1>
              <p className="py-2">
                A renovation loan can help you overcome your financial barriers
                and achieve your ideal home. Although a home renovation loan is
                a type of personal loan, it differs from your standard personal
                loan in that the tenure is usually short-term, and interest
                rates are also much lower, making it an attractive option.
              </p>
              <p className="py-2">
                Additionally, if you are looking to re-sell your rent out your
                property, home improvements can significantly boost the value of
                your space and help you build your home equity faster!
              </p>
              <p className="py-2">
                Another benefit of a renovation loan is the fast application
                process and easy funding. The process of applying for a
                renovation loan is straightforward. If you have a good credit
                score, your application will usually be approved, and you can
                get financial support for your renovation in no time.{' '}
              </p>
            </div>

            <div className="w-full border border-1 p-6  mt-8" id="car-loan">
              <Image src={icKey} height={64} alt="icon" />
              <h1 className="font-bold text-xl py-2">Car Loan</h1>
              <div className="h-[1px] bg-slate-300" />
              <p className="py-2">
                Buying a car is a big financial commitment and perhaps one of
                the most significant purchases you’ll make in your life. With
                such an important decision, you want every detail to be tailored
                to your liking – from the colour to the style and specific
                features. But what if you’ve found your dream car and coming up
                just short on cash to pay for the vehicle? That’s where taking
                out a car loan from a trusted financial institution can be your
                best bet to have your cake and eat it too.
              </p>
              <h1 className="font-bold text-xl py-2">What is a car loan?</h1>
              <p className="py-2">
                As the name suggests, a car loan gives an individual access to
                funds needed to finance the purchase of a vehicle, be it used or
                new. The borrowed money is repaid to the bank in instalments
                over a period of time of up to seven years, plus interest. In
                Singapore, you can expect to get around 30% to 50% financing for
                your car, with a maximum of 70% for cars with an open market
                value of $20,000 or less. For cars with an open market value of
                over $20,000, the loan amount is capped at 60%.
              </p>
              <h1 className="font-bold text-xl py-2">Options for car loans</h1>
              <p className="py-2">
                In Singapore, there are two ways in which you can obtain a car
                loan – either from the bank or a car dealership. Car loans with
                banks work in a similar way as other types of secured loans and
                are considered a direct way of lending. Banks are the ideal
                option for those with a good credit score, as they may enjoy a
                lower interest rate.
              </p>
              <p className="py-2">
                Various car dealerships also offer in-house car loans that make
                it convenient for you when you are buying a car. It is usually
                easier to obtain a car loan with a car dealer than with a bank,
                especially if you do not have a great credit rating. However,
                car loans with car dealerships are usually more expensive as
                there are additional administrative costs and commission fees
                involved.
              </p>
              <p className="py-2">
                An alternative option is to get a personal loan and use it to
                buy the car. A personal loan is unsecured, meaning that the car
                is not placed as collateral for the loan, which is the case for
                traditional car loans. Using Lendela, you can quickly find and
                compare the best personal loan offers with a competitive
                interest rate and loan term that suits your needs, to finance
                you car purchase.
              </p>
            </div>

            <div className="w-full border border-1 p-6  mt-8" id="wedding-loan">
              <Image src={icThrophy} height={64} alt="icon" />
              <h1 className="font-bold text-xl py-2">Wedding Loan</h1>
              <div className="h-[1px] bg-slate-300" />
              <p className="py-2">
                Weddings are a once-in-a-lifetime celebratory event, and often a
                costly one at that. On average, weddings in Singapore costs
                around $30,000 to $50,000 but can rack up to over $100,000 if
                you are after a more extravagant affair. It’s fair to say that
                couples planning a wedding face a lot of financial stress. To
                help ease the pressure and clear your fees upfront while giving
                you the freedom to host the wedding of your dreams, many couples
                in Singapore turn to wedding loans as a solution.
              </p>
              <h1 className="font-bold text-xl py-2">
                What is a wedding loan?
              </h1>
              <p className="py-2">
                A wedding loan is a personal loan taken out to finance wedding
                expenses. It can be used to cover a wide variety of
                wedding-related costs such as wedding attire, banquet, catering,
                photography, and even honeymoon trips. As it is an unsecured
                loan, you do not need to back it up with any collateral. In
                Singapore, you can get a wedding loan up to 10 times your
                monthly salary. Loan tenures are typically short-term, and you
                would repay your bank in instalments over a period of one to
                five years, depending on your financial capabilities.
              </p>
              <h1 className="font-bold text-xl py-2">
                How do wedding loans work?
              </h1>
              <p className="py-2">
                Firstly, to apply for a wedding loan, you must make sure that
                you satisfy the basic requirements. In Singapore, these include
                being at least 21 years of age, a salaried Singaporean citizen,
                permanent resident, EP holder, or S-pass holder, as well as
                having a minimum monthly income of $2,500.
              </p>
              <p className="py-2">
                Besides ensuring that you fulfil the above criteria, there are a
                few other things to consider when taking out a wedding loan.
                Upon determining your financial needs, you want to find a bank
                that can meet them at a reasonable interest rate and terms. Bear
                in mind that a good credit rating can help you get a lower
                interest rate and a better loan offer. It’s important to
                carefully compare and weigh up your options, lest you risk
                paying more than you need to!
              </p>
              <p className="py-2">
                With many banks and financial institutions in Singapore offering
                wedding loans, it can be a time-consuming process to figure out
                which best suits your needs. Lendela is here to do the legwork
                for you. After filling out a short application, you will get a
                tailored list of the best wedding loan offers you qualify for
                within minutes. It doesn’t get any easier!
              </p>
            </div>

            <div
              className="w-full border border-1 p-6  mt-8 mb-8"
              id="lendela-help"
            >
              <Image src={icTarget} height={64} alt="icon" />
              <h1 className="font-bold text-xl py-2">
                How does Lendela help you find the best personal loan in
                Singapore?
              </h1>
              <div className="h-[1px] bg-slate-300" />
              <p className="py-2">
                It is time to get the hustles out of the personal loan
                application process, and Lendela is here to make it happen.
                Whether you want a personal loan for buying a new car or to fund
                tertiary education, the process does not have to be stressful
                and painfully long. By applying for a personal loan through
                Lendela, the process that could have taken multiple hours, days,
                or weeks is completed in just a few minutes.{' '}
              </p>
              <p className="py-2">
                Comparing loan offers with Lendela makes it easy for you to land
                the best loan offer available to you in Singapore, and to do so
                quickly and efficiently. Why struggle to make ten applications,
                and all of them get rejected when Lendela can help you find the
                one in no time? Submit the application, go on with your day, and
                let Lendela do the work for you. Other benefits of using Lendela
                include:{' '}
              </p>
              <p className="py-2">1. You only need to provide a few details.</p>
              <p className="py-2">
                2. Lendela partners with a long list of banks and financial
                institutions to get application approval as fast as possible.
              </p>
              <p className="py-2">
                3. By connecting with multiple banks and financial institutions,
                Lendela makes it easy to compare and identify personal loans
                with low-interest rates.
              </p>
              <p className="py-2">
                4. You can find a personal loan even with a not-so-good credit
                score. Even if most conventional banks might have declined your
                application, Lendela can help to revive your hope of getting the
                personal loan that you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqLoans
